type OptionalRecord = {
  [key in string]?: unknown;
};

type RawResponse = {
  data: Response;
  headers: Headers;
};

export type Endpoint<Params, Meta, Response> = Params extends
  | OptionalRecord
  | undefined
  ? {
      (params?: Params, meta?: Meta): Promise<Response>;
      /** @experimental */
      $raw(params?: Params, meta?: Meta): Promise<RawResponse>;
    }
  : {
      (params: Params, meta?: Meta): Promise<Response>;
      /** @experimental */
      $raw(params: Params, meta?: Meta): Promise<RawResponse>;
    };
