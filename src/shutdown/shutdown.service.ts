import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NodeSSH, Config } from 'node-ssh';

@Injectable()
export class ShutdownService {
  constructor(private readonly config: ConfigService) {}

  async shutdown() {
    const ssh = new NodeSSH();

    const conn = await ssh
      .connect({
        host: this.config.get('IP'),
        username: this.config.get('USER'),
        password: this.config.get('PW'),
        port: this.config.get('PORT'),
        readyTimeout: 1000 * 5,
      } as Config)
      .catch((reason) => {
        console.log(reason);
        return '원격 서버 연결에 실패했습니다.';
      });

    if (typeof conn === 'string') return conn;

    const result = await ssh
      .execCommand(`shutdown -s -t ${this.config.get('TIMEOUT')}`)
      .then((response) => {
        if (response.code !== 0) return '명령어 실행 중 오류가 발생했습니다.';

        return '원격 종료에 성공했습니다.';
      })
      .catch((reason) => {
        console.log(reason);
        return '원격 종료에 실패했습니다.';
      });

    return result;
  }
}
