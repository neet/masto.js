// Unlike lib.dom, @types/node (undici) does not declare HeadersInit and BodyInit
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/66824#issuecomment-1798836987
type HeadersInit = NonNullable<RequestInit["headers"]>;
type BodyInit = NonNullable<RequestInit["body"]>;
