import { ServiceBase } from 'services/http/service-base';

class PoolServices extends ServiceBase {
  getPool = async (param?: any) => {
    const res = await this.get(`${process.env.REACT_APP_API_BASE_URL}/pools/`, {
      ...param,
    });

    return res.data;
  };

  getMyPool = async (address?: any, param?: any) => {
    const res = await this.get(
      `${process.env.REACT_APP_API_BASE_URL}/pools/my-pools/${address}`,
      {
        ...param,
      },
    );
    return res.data;
  };

  swrFetcherMyPool = async (
    address: string,
    params: any,
    stopCall?: boolean,
  ) => {
    if (address && !stopCall) {
      return await this.get(
        `${process.env.REACT_APP_API_BASE_URL}/pools/my-pools/${address}`,
        params,
      );
    }
  };
  swrFetcherPool = async (params: any, stopCall?: boolean) => {
    if (!stopCall) {
      return await this.get(
        `${process.env.REACT_APP_API_BASE_URL}/pools/`,
        params,
      );
    }
  };
}

const pollServices = new PoolServices();

export default pollServices;
