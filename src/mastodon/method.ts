/* eslint-disable @typescript-eslint/no-explicit-any */
import { type HttpMetaParams, type HttpResponse } from "../interfaces/http.js";
import { type Paginator } from "./paginator.js";

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
type IsOptional<T, TTrue, TFalse> = {} extends T
  ? TTrue
  : T extends undefined
    ? TTrue
    : TFalse;

type WrapInPromiseIfNotPaginator<T> =
  T extends Paginator<unknown> ? T : Promise<T>;

type DefaultMethod<
  TResult,
  TParams,
  TMeta extends HttpMetaParams<any>,
> = IsOptional<
  TParams,
  { (params?: TParams, meta?: TMeta): WrapInPromiseIfNotPaginator<TResult> },
  { (params: TParams, meta?: TMeta): WrapInPromiseIfNotPaginator<TResult> }
>;

type Raw<T> =
  T extends Paginator<infer R>
    ? Paginator<HttpResponse<R>>
    : Promise<HttpResponse<T>>;

/** @experimental */
type RawMethod<
  TResult,
  TParams,
  TMeta extends HttpMetaParams<any>,
> = IsOptional<
  TParams,
  { $raw(params?: TParams, meta?: TMeta): Raw<TResult> },
  { $raw(params: TParams, meta?: TMeta): Raw<TResult> }
>;

export type Method<
  TResult,
  TParams = undefined,
  TMeta extends HttpMetaParams<any> = HttpMetaParams,
> = DefaultMethod<TResult, TParams, TMeta> & RawMethod<TResult, TParams, TMeta>;
