import { type HttpMetaParams } from "../interfaces/http.js";
import { type Paginator } from "./paginator.js";

type Result<T> = T extends Paginator<unknown> ? T : Promise<T>;

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
type IfOptionalRecord<T, TTrue, TFalse> = {} extends T
  ? TTrue
  : T extends undefined
    ? TTrue
    : TFalse;

export type Method<
  TResult,
  TParams = undefined,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  TMeta extends HttpMetaParams<any> = HttpMetaParams,
> = IfOptionalRecord<
  TParams,
  { (params?: TParams, meta?: TMeta): Result<TResult> },
  { (params: TParams, meta?: TMeta): Result<TResult> }
>;
