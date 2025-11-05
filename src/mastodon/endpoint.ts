type OptionalRecord = {
  [key in string]?: any;
};

export type Endpoint<Params, Meta, Response> = Params extends OptionalRecord | undefined
  ? {
      (params?: Params, meta?: Meta): Promise<Response>;
      /** @experimental */
      $raw(params?: Params, meta?: Meta): Promise<[data: Response, headers: Headers]>;
    }
  : {
      (params: Params, meta?: Meta): Promise<Response>;
      /** @experimental */
      $raw(params: Params, meta?: Meta): Promise<[data: Response, headers: Headers]>;
    }
