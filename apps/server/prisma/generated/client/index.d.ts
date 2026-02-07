
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model tbl_designation_master
 * 
 */
export type tbl_designation_master = $Result.DefaultSelection<Prisma.$tbl_designation_masterPayload>
/**
 * Model tbl_status_master
 * 
 */
export type tbl_status_master = $Result.DefaultSelection<Prisma.$tbl_status_masterPayload>
/**
 * Model tbl_department_master
 * 
 */
export type tbl_department_master = $Result.DefaultSelection<Prisma.$tbl_department_masterPayload>
/**
 * Model BlogCategory
 * 
 */
export type BlogCategory = $Result.DefaultSelection<Prisma.$BlogCategoryPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model tbl_press_release
 * 
 */
export type tbl_press_release = $Result.DefaultSelection<Prisma.$tbl_press_releasePayload>
/**
 * Model tbl_faq
 * 
 */
export type tbl_faq = $Result.DefaultSelection<Prisma.$tbl_faqPayload>
/**
 * Model tbl_contact_us
 * 
 */
export type tbl_contact_us = $Result.DefaultSelection<Prisma.$tbl_contact_usPayload>
/**
 * Model tbl_our_team
 * 
 */
export type tbl_our_team = $Result.DefaultSelection<Prisma.$tbl_our_teamPayload>
/**
 * Model tbl_success_story
 * 
 */
export type tbl_success_story = $Result.DefaultSelection<Prisma.$tbl_success_storyPayload>
/**
 * Model tbl_home_improvement_application
 * 
 */
export type tbl_home_improvement_application = $Result.DefaultSelection<Prisma.$tbl_home_improvement_applicationPayload>
/**
 * Model tbl_household_member
 * 
 */
export type tbl_household_member = $Result.DefaultSelection<Prisma.$tbl_household_memberPayload>
/**
 * Model tbl_monthly_liability
 * 
 */
export type tbl_monthly_liability = $Result.DefaultSelection<Prisma.$tbl_monthly_liabilityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_designation_master`: Exposes CRUD operations for the **tbl_designation_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_designation_masters
    * const tbl_designation_masters = await prisma.tbl_designation_master.findMany()
    * ```
    */
  get tbl_designation_master(): Prisma.tbl_designation_masterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_status_master`: Exposes CRUD operations for the **tbl_status_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_status_masters
    * const tbl_status_masters = await prisma.tbl_status_master.findMany()
    * ```
    */
  get tbl_status_master(): Prisma.tbl_status_masterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_department_master`: Exposes CRUD operations for the **tbl_department_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_department_masters
    * const tbl_department_masters = await prisma.tbl_department_master.findMany()
    * ```
    */
  get tbl_department_master(): Prisma.tbl_department_masterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogCategories
    * const blogCategories = await prisma.blogCategory.findMany()
    * ```
    */
  get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_press_release`: Exposes CRUD operations for the **tbl_press_release** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_press_releases
    * const tbl_press_releases = await prisma.tbl_press_release.findMany()
    * ```
    */
  get tbl_press_release(): Prisma.tbl_press_releaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_faq`: Exposes CRUD operations for the **tbl_faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_faqs
    * const tbl_faqs = await prisma.tbl_faq.findMany()
    * ```
    */
  get tbl_faq(): Prisma.tbl_faqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_contact_us`: Exposes CRUD operations for the **tbl_contact_us** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_contact_uses
    * const tbl_contact_uses = await prisma.tbl_contact_us.findMany()
    * ```
    */
  get tbl_contact_us(): Prisma.tbl_contact_usDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_our_team`: Exposes CRUD operations for the **tbl_our_team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_our_teams
    * const tbl_our_teams = await prisma.tbl_our_team.findMany()
    * ```
    */
  get tbl_our_team(): Prisma.tbl_our_teamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_success_story`: Exposes CRUD operations for the **tbl_success_story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_success_stories
    * const tbl_success_stories = await prisma.tbl_success_story.findMany()
    * ```
    */
  get tbl_success_story(): Prisma.tbl_success_storyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_home_improvement_application`: Exposes CRUD operations for the **tbl_home_improvement_application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_home_improvement_applications
    * const tbl_home_improvement_applications = await prisma.tbl_home_improvement_application.findMany()
    * ```
    */
  get tbl_home_improvement_application(): Prisma.tbl_home_improvement_applicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_household_member`: Exposes CRUD operations for the **tbl_household_member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_household_members
    * const tbl_household_members = await prisma.tbl_household_member.findMany()
    * ```
    */
  get tbl_household_member(): Prisma.tbl_household_memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_monthly_liability`: Exposes CRUD operations for the **tbl_monthly_liability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_monthly_liabilities
    * const tbl_monthly_liabilities = await prisma.tbl_monthly_liability.findMany()
    * ```
    */
  get tbl_monthly_liability(): Prisma.tbl_monthly_liabilityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    tbl_designation_master: 'tbl_designation_master',
    tbl_status_master: 'tbl_status_master',
    tbl_department_master: 'tbl_department_master',
    BlogCategory: 'BlogCategory',
    Blog: 'Blog',
    tbl_press_release: 'tbl_press_release',
    tbl_faq: 'tbl_faq',
    tbl_contact_us: 'tbl_contact_us',
    tbl_our_team: 'tbl_our_team',
    tbl_success_story: 'tbl_success_story',
    tbl_home_improvement_application: 'tbl_home_improvement_application',
    tbl_household_member: 'tbl_household_member',
    tbl_monthly_liability: 'tbl_monthly_liability'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tbl_designation_master" | "tbl_status_master" | "tbl_department_master" | "blogCategory" | "blog" | "tbl_press_release" | "tbl_faq" | "tbl_contact_us" | "tbl_our_team" | "tbl_success_story" | "tbl_home_improvement_application" | "tbl_household_member" | "tbl_monthly_liability"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      tbl_designation_master: {
        payload: Prisma.$tbl_designation_masterPayload<ExtArgs>
        fields: Prisma.tbl_designation_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_designation_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_designation_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>
          }
          findFirst: {
            args: Prisma.tbl_designation_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_designation_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>
          }
          findMany: {
            args: Prisma.tbl_designation_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>[]
          }
          create: {
            args: Prisma.tbl_designation_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>
          }
          createMany: {
            args: Prisma.tbl_designation_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_designation_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>
          }
          update: {
            args: Prisma.tbl_designation_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>
          }
          deleteMany: {
            args: Prisma.tbl_designation_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_designation_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_designation_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_designation_masterPayload>
          }
          aggregate: {
            args: Prisma.Tbl_designation_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_designation_master>
          }
          groupBy: {
            args: Prisma.tbl_designation_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_designation_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_designation_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_designation_masterCountAggregateOutputType> | number
          }
        }
      }
      tbl_status_master: {
        payload: Prisma.$tbl_status_masterPayload<ExtArgs>
        fields: Prisma.tbl_status_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_status_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_status_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>
          }
          findFirst: {
            args: Prisma.tbl_status_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_status_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>
          }
          findMany: {
            args: Prisma.tbl_status_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>[]
          }
          create: {
            args: Prisma.tbl_status_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>
          }
          createMany: {
            args: Prisma.tbl_status_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_status_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>
          }
          update: {
            args: Prisma.tbl_status_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>
          }
          deleteMany: {
            args: Prisma.tbl_status_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_status_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_status_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_status_masterPayload>
          }
          aggregate: {
            args: Prisma.Tbl_status_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_status_master>
          }
          groupBy: {
            args: Prisma.tbl_status_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_status_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_status_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_status_masterCountAggregateOutputType> | number
          }
        }
      }
      tbl_department_master: {
        payload: Prisma.$tbl_department_masterPayload<ExtArgs>
        fields: Prisma.tbl_department_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_department_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_department_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>
          }
          findFirst: {
            args: Prisma.tbl_department_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_department_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>
          }
          findMany: {
            args: Prisma.tbl_department_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>[]
          }
          create: {
            args: Prisma.tbl_department_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>
          }
          createMany: {
            args: Prisma.tbl_department_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_department_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>
          }
          update: {
            args: Prisma.tbl_department_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>
          }
          deleteMany: {
            args: Prisma.tbl_department_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_department_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_department_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_department_masterPayload>
          }
          aggregate: {
            args: Prisma.Tbl_department_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_department_master>
          }
          groupBy: {
            args: Prisma.tbl_department_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_department_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_department_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_department_masterCountAggregateOutputType> | number
          }
        }
      }
      BlogCategory: {
        payload: Prisma.$BlogCategoryPayload<ExtArgs>
        fields: Prisma.BlogCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          update: {
            args: Prisma.BlogCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogCategory>
          }
          groupBy: {
            args: Prisma.BlogCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      tbl_press_release: {
        payload: Prisma.$tbl_press_releasePayload<ExtArgs>
        fields: Prisma.tbl_press_releaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_press_releaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_press_releaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>
          }
          findFirst: {
            args: Prisma.tbl_press_releaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_press_releaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>
          }
          findMany: {
            args: Prisma.tbl_press_releaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>[]
          }
          create: {
            args: Prisma.tbl_press_releaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>
          }
          createMany: {
            args: Prisma.tbl_press_releaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_press_releaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>
          }
          update: {
            args: Prisma.tbl_press_releaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>
          }
          deleteMany: {
            args: Prisma.tbl_press_releaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_press_releaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_press_releaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_press_releasePayload>
          }
          aggregate: {
            args: Prisma.Tbl_press_releaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_press_release>
          }
          groupBy: {
            args: Prisma.tbl_press_releaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_press_releaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_press_releaseCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_press_releaseCountAggregateOutputType> | number
          }
        }
      }
      tbl_faq: {
        payload: Prisma.$tbl_faqPayload<ExtArgs>
        fields: Prisma.tbl_faqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_faqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_faqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>
          }
          findFirst: {
            args: Prisma.tbl_faqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_faqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>
          }
          findMany: {
            args: Prisma.tbl_faqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>[]
          }
          create: {
            args: Prisma.tbl_faqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>
          }
          createMany: {
            args: Prisma.tbl_faqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_faqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>
          }
          update: {
            args: Prisma.tbl_faqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>
          }
          deleteMany: {
            args: Prisma.tbl_faqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_faqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_faqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_faqPayload>
          }
          aggregate: {
            args: Prisma.Tbl_faqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_faq>
          }
          groupBy: {
            args: Prisma.tbl_faqGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_faqGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_faqCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_faqCountAggregateOutputType> | number
          }
        }
      }
      tbl_contact_us: {
        payload: Prisma.$tbl_contact_usPayload<ExtArgs>
        fields: Prisma.tbl_contact_usFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_contact_usFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_contact_usFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>
          }
          findFirst: {
            args: Prisma.tbl_contact_usFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_contact_usFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>
          }
          findMany: {
            args: Prisma.tbl_contact_usFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>[]
          }
          create: {
            args: Prisma.tbl_contact_usCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>
          }
          createMany: {
            args: Prisma.tbl_contact_usCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_contact_usDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>
          }
          update: {
            args: Prisma.tbl_contact_usUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>
          }
          deleteMany: {
            args: Prisma.tbl_contact_usDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_contact_usUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_contact_usUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_contact_usPayload>
          }
          aggregate: {
            args: Prisma.Tbl_contact_usAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_contact_us>
          }
          groupBy: {
            args: Prisma.tbl_contact_usGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_contact_usGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_contact_usCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_contact_usCountAggregateOutputType> | number
          }
        }
      }
      tbl_our_team: {
        payload: Prisma.$tbl_our_teamPayload<ExtArgs>
        fields: Prisma.tbl_our_teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_our_teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_our_teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>
          }
          findFirst: {
            args: Prisma.tbl_our_teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_our_teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>
          }
          findMany: {
            args: Prisma.tbl_our_teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>[]
          }
          create: {
            args: Prisma.tbl_our_teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>
          }
          createMany: {
            args: Prisma.tbl_our_teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_our_teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>
          }
          update: {
            args: Prisma.tbl_our_teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>
          }
          deleteMany: {
            args: Prisma.tbl_our_teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_our_teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_our_teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_our_teamPayload>
          }
          aggregate: {
            args: Prisma.Tbl_our_teamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_our_team>
          }
          groupBy: {
            args: Prisma.tbl_our_teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_our_teamGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_our_teamCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_our_teamCountAggregateOutputType> | number
          }
        }
      }
      tbl_success_story: {
        payload: Prisma.$tbl_success_storyPayload<ExtArgs>
        fields: Prisma.tbl_success_storyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_success_storyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_success_storyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>
          }
          findFirst: {
            args: Prisma.tbl_success_storyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_success_storyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>
          }
          findMany: {
            args: Prisma.tbl_success_storyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>[]
          }
          create: {
            args: Prisma.tbl_success_storyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>
          }
          createMany: {
            args: Prisma.tbl_success_storyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_success_storyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>
          }
          update: {
            args: Prisma.tbl_success_storyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>
          }
          deleteMany: {
            args: Prisma.tbl_success_storyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_success_storyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_success_storyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_success_storyPayload>
          }
          aggregate: {
            args: Prisma.Tbl_success_storyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_success_story>
          }
          groupBy: {
            args: Prisma.tbl_success_storyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_success_storyGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_success_storyCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_success_storyCountAggregateOutputType> | number
          }
        }
      }
      tbl_home_improvement_application: {
        payload: Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>
        fields: Prisma.tbl_home_improvement_applicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_home_improvement_applicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_home_improvement_applicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>
          }
          findFirst: {
            args: Prisma.tbl_home_improvement_applicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_home_improvement_applicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>
          }
          findMany: {
            args: Prisma.tbl_home_improvement_applicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>[]
          }
          create: {
            args: Prisma.tbl_home_improvement_applicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>
          }
          createMany: {
            args: Prisma.tbl_home_improvement_applicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_home_improvement_applicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>
          }
          update: {
            args: Prisma.tbl_home_improvement_applicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>
          }
          deleteMany: {
            args: Prisma.tbl_home_improvement_applicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_home_improvement_applicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_home_improvement_applicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_home_improvement_applicationPayload>
          }
          aggregate: {
            args: Prisma.Tbl_home_improvement_applicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_home_improvement_application>
          }
          groupBy: {
            args: Prisma.tbl_home_improvement_applicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_home_improvement_applicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_home_improvement_applicationCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_home_improvement_applicationCountAggregateOutputType> | number
          }
        }
      }
      tbl_household_member: {
        payload: Prisma.$tbl_household_memberPayload<ExtArgs>
        fields: Prisma.tbl_household_memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_household_memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_household_memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>
          }
          findFirst: {
            args: Prisma.tbl_household_memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_household_memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>
          }
          findMany: {
            args: Prisma.tbl_household_memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>[]
          }
          create: {
            args: Prisma.tbl_household_memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>
          }
          createMany: {
            args: Prisma.tbl_household_memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_household_memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>
          }
          update: {
            args: Prisma.tbl_household_memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>
          }
          deleteMany: {
            args: Prisma.tbl_household_memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_household_memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_household_memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_household_memberPayload>
          }
          aggregate: {
            args: Prisma.Tbl_household_memberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_household_member>
          }
          groupBy: {
            args: Prisma.tbl_household_memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_household_memberGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_household_memberCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_household_memberCountAggregateOutputType> | number
          }
        }
      }
      tbl_monthly_liability: {
        payload: Prisma.$tbl_monthly_liabilityPayload<ExtArgs>
        fields: Prisma.tbl_monthly_liabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_monthly_liabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_monthly_liabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>
          }
          findFirst: {
            args: Prisma.tbl_monthly_liabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_monthly_liabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>
          }
          findMany: {
            args: Prisma.tbl_monthly_liabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>[]
          }
          create: {
            args: Prisma.tbl_monthly_liabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>
          }
          createMany: {
            args: Prisma.tbl_monthly_liabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_monthly_liabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>
          }
          update: {
            args: Prisma.tbl_monthly_liabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>
          }
          deleteMany: {
            args: Prisma.tbl_monthly_liabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_monthly_liabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_monthly_liabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_monthly_liabilityPayload>
          }
          aggregate: {
            args: Prisma.Tbl_monthly_liabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_monthly_liability>
          }
          groupBy: {
            args: Prisma.tbl_monthly_liabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_monthly_liabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_monthly_liabilityCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_monthly_liabilityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tbl_designation_master?: tbl_designation_masterOmit
    tbl_status_master?: tbl_status_masterOmit
    tbl_department_master?: tbl_department_masterOmit
    blogCategory?: BlogCategoryOmit
    blog?: BlogOmit
    tbl_press_release?: tbl_press_releaseOmit
    tbl_faq?: tbl_faqOmit
    tbl_contact_us?: tbl_contact_usOmit
    tbl_our_team?: tbl_our_teamOmit
    tbl_success_story?: tbl_success_storyOmit
    tbl_home_improvement_application?: tbl_home_improvement_applicationOmit
    tbl_household_member?: tbl_household_memberOmit
    tbl_monthly_liability?: tbl_monthly_liabilityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tbl_designation_masterCountOutputType
   */

  export type Tbl_designation_masterCountOutputType = {
    users: number
    teamMembers: number
  }

  export type Tbl_designation_masterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tbl_designation_masterCountOutputTypeCountUsersArgs
    teamMembers?: boolean | Tbl_designation_masterCountOutputTypeCountTeamMembersArgs
  }

  // Custom InputTypes
  /**
   * Tbl_designation_masterCountOutputType without action
   */
  export type Tbl_designation_masterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_designation_masterCountOutputType
     */
    select?: Tbl_designation_masterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_designation_masterCountOutputType without action
   */
  export type Tbl_designation_masterCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * Tbl_designation_masterCountOutputType without action
   */
  export type Tbl_designation_masterCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_our_teamWhereInput
  }


  /**
   * Count Type Tbl_department_masterCountOutputType
   */

  export type Tbl_department_masterCountOutputType = {
    users: number
  }

  export type Tbl_department_masterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tbl_department_masterCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Tbl_department_masterCountOutputType without action
   */
  export type Tbl_department_masterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_department_masterCountOutputType
     */
    select?: Tbl_department_masterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_department_masterCountOutputType without action
   */
  export type Tbl_department_masterCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type BlogCategoryCountOutputType
   */

  export type BlogCategoryCountOutputType = {
    blogs: number
  }

  export type BlogCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogCategoryCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategoryCountOutputType
     */
    select?: BlogCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }


  /**
   * Count Type Tbl_home_improvement_applicationCountOutputType
   */

  export type Tbl_home_improvement_applicationCountOutputType = {
    household_members: number
    monthly_liabilities: number
  }

  export type Tbl_home_improvement_applicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household_members?: boolean | Tbl_home_improvement_applicationCountOutputTypeCountHousehold_membersArgs
    monthly_liabilities?: boolean | Tbl_home_improvement_applicationCountOutputTypeCountMonthly_liabilitiesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_home_improvement_applicationCountOutputType without action
   */
  export type Tbl_home_improvement_applicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_home_improvement_applicationCountOutputType
     */
    select?: Tbl_home_improvement_applicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_home_improvement_applicationCountOutputType without action
   */
  export type Tbl_home_improvement_applicationCountOutputTypeCountHousehold_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_household_memberWhereInput
  }

  /**
   * Tbl_home_improvement_applicationCountOutputType without action
   */
  export type Tbl_home_improvement_applicationCountOutputTypeCountMonthly_liabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_monthly_liabilityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    department_id: number | null
    designation_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    department_id: number | null
    designation_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    contact: string | null
    otp: string | null
    otp_expires_at: Date | null
    department_id: number | null
    designation_id: number | null
    image: string | null
    password: string | null
    role: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    contact: string | null
    otp: string | null
    otp_expires_at: Date | null
    department_id: number | null
    designation_id: number | null
    image: string | null
    password: string | null
    role: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    contact: number
    otp: number
    otp_expires_at: number
    department_id: number
    designation_id: number
    image: number
    password: number
    role: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    department_id?: true
    designation_id?: true
    status?: true
    is_deleted?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    department_id?: true
    designation_id?: true
    status?: true
    is_deleted?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contact?: true
    otp?: true
    otp_expires_at?: true
    department_id?: true
    designation_id?: true
    image?: true
    password?: true
    role?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contact?: true
    otp?: true
    otp_expires_at?: true
    department_id?: true
    designation_id?: true
    image?: true
    password?: true
    role?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contact?: true
    otp?: true
    otp_expires_at?: true
    department_id?: true
    designation_id?: true
    image?: true
    password?: true
    role?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string | null
    contact: string | null
    otp: string | null
    otp_expires_at: Date | null
    department_id: number | null
    designation_id: number | null
    image: string | null
    password: string
    role: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    contact?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    department_id?: boolean
    designation_id?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    designation?: boolean | User$designationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    contact?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    department_id?: boolean
    designation_id?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "contact" | "otp" | "otp_expires_at" | "department_id" | "designation_id" | "image" | "password" | "role" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    designation?: boolean | User$designationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      department: Prisma.$tbl_department_masterPayload<ExtArgs> | null
      designation: Prisma.$tbl_designation_masterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      contact: string | null
      otp: string | null
      otp_expires_at: Date | null
      department_id: number | null
      designation_id: number | null
      image: string | null
      password: string
      role: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    designation<T extends User$designationArgs<ExtArgs> = {}>(args?: Subset<T, User$designationArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otp_expires_at: FieldRef<"User", 'DateTime'>
    readonly department_id: FieldRef<"User", 'Int'>
    readonly designation_id: FieldRef<"User", 'Int'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Int'>
    readonly is_deleted: FieldRef<"User", 'Int'>
    readonly created_on: FieldRef<"User", 'DateTime'>
    readonly updated_on: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    where?: tbl_department_masterWhereInput
  }

  /**
   * User.designation
   */
  export type User$designationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    where?: tbl_designation_masterWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model tbl_designation_master
   */

  export type AggregateTbl_designation_master = {
    _count: Tbl_designation_masterCountAggregateOutputType | null
    _avg: Tbl_designation_masterAvgAggregateOutputType | null
    _sum: Tbl_designation_masterSumAggregateOutputType | null
    _min: Tbl_designation_masterMinAggregateOutputType | null
    _max: Tbl_designation_masterMaxAggregateOutputType | null
  }

  export type Tbl_designation_masterAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_designation_masterSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_designation_masterMinAggregateOutputType = {
    id: number | null
    designation_name: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_designation_masterMaxAggregateOutputType = {
    id: number | null
    designation_name: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_designation_masterCountAggregateOutputType = {
    id: number
    designation_name: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_designation_masterAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_designation_masterSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_designation_masterMinAggregateInputType = {
    id?: true
    designation_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_designation_masterMaxAggregateInputType = {
    id?: true
    designation_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_designation_masterCountAggregateInputType = {
    id?: true
    designation_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_designation_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_designation_master to aggregate.
     */
    where?: tbl_designation_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_designation_masters to fetch.
     */
    orderBy?: tbl_designation_masterOrderByWithRelationInput | tbl_designation_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_designation_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_designation_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_designation_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_designation_masters
    **/
    _count?: true | Tbl_designation_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_designation_masterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_designation_masterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_designation_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_designation_masterMaxAggregateInputType
  }

  export type GetTbl_designation_masterAggregateType<T extends Tbl_designation_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_designation_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_designation_master[P]>
      : GetScalarType<T[P], AggregateTbl_designation_master[P]>
  }




  export type tbl_designation_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_designation_masterWhereInput
    orderBy?: tbl_designation_masterOrderByWithAggregationInput | tbl_designation_masterOrderByWithAggregationInput[]
    by: Tbl_designation_masterScalarFieldEnum[] | Tbl_designation_masterScalarFieldEnum
    having?: tbl_designation_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_designation_masterCountAggregateInputType | true
    _avg?: Tbl_designation_masterAvgAggregateInputType
    _sum?: Tbl_designation_masterSumAggregateInputType
    _min?: Tbl_designation_masterMinAggregateInputType
    _max?: Tbl_designation_masterMaxAggregateInputType
  }

  export type Tbl_designation_masterGroupByOutputType = {
    id: number
    designation_name: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_designation_masterCountAggregateOutputType | null
    _avg: Tbl_designation_masterAvgAggregateOutputType | null
    _sum: Tbl_designation_masterSumAggregateOutputType | null
    _min: Tbl_designation_masterMinAggregateOutputType | null
    _max: Tbl_designation_masterMaxAggregateOutputType | null
  }

  type GetTbl_designation_masterGroupByPayload<T extends tbl_designation_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_designation_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_designation_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_designation_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_designation_masterGroupByOutputType[P]>
        }
      >
    >


  export type tbl_designation_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
    users?: boolean | tbl_designation_master$usersArgs<ExtArgs>
    teamMembers?: boolean | tbl_designation_master$teamMembersArgs<ExtArgs>
    _count?: boolean | Tbl_designation_masterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_designation_master"]>



  export type tbl_designation_masterSelectScalar = {
    id?: boolean
    designation_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_designation_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designation_name" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_designation_master"]>
  export type tbl_designation_masterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | tbl_designation_master$usersArgs<ExtArgs>
    teamMembers?: boolean | tbl_designation_master$teamMembersArgs<ExtArgs>
    _count?: boolean | Tbl_designation_masterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_designation_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_designation_master"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      teamMembers: Prisma.$tbl_our_teamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      designation_name: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_designation_master"]>
    composites: {}
  }

  type tbl_designation_masterGetPayload<S extends boolean | null | undefined | tbl_designation_masterDefaultArgs> = $Result.GetResult<Prisma.$tbl_designation_masterPayload, S>

  type tbl_designation_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_designation_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_designation_masterCountAggregateInputType | true
    }

  export interface tbl_designation_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_designation_master'], meta: { name: 'tbl_designation_master' } }
    /**
     * Find zero or one Tbl_designation_master that matches the filter.
     * @param {tbl_designation_masterFindUniqueArgs} args - Arguments to find a Tbl_designation_master
     * @example
     * // Get one Tbl_designation_master
     * const tbl_designation_master = await prisma.tbl_designation_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_designation_masterFindUniqueArgs>(args: SelectSubset<T, tbl_designation_masterFindUniqueArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_designation_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_designation_masterFindUniqueOrThrowArgs} args - Arguments to find a Tbl_designation_master
     * @example
     * // Get one Tbl_designation_master
     * const tbl_designation_master = await prisma.tbl_designation_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_designation_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_designation_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_designation_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_designation_masterFindFirstArgs} args - Arguments to find a Tbl_designation_master
     * @example
     * // Get one Tbl_designation_master
     * const tbl_designation_master = await prisma.tbl_designation_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_designation_masterFindFirstArgs>(args?: SelectSubset<T, tbl_designation_masterFindFirstArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_designation_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_designation_masterFindFirstOrThrowArgs} args - Arguments to find a Tbl_designation_master
     * @example
     * // Get one Tbl_designation_master
     * const tbl_designation_master = await prisma.tbl_designation_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_designation_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_designation_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_designation_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_designation_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_designation_masters
     * const tbl_designation_masters = await prisma.tbl_designation_master.findMany()
     * 
     * // Get first 10 Tbl_designation_masters
     * const tbl_designation_masters = await prisma.tbl_designation_master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_designation_masterWithIdOnly = await prisma.tbl_designation_master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_designation_masterFindManyArgs>(args?: SelectSubset<T, tbl_designation_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_designation_master.
     * @param {tbl_designation_masterCreateArgs} args - Arguments to create a Tbl_designation_master.
     * @example
     * // Create one Tbl_designation_master
     * const Tbl_designation_master = await prisma.tbl_designation_master.create({
     *   data: {
     *     // ... data to create a Tbl_designation_master
     *   }
     * })
     * 
     */
    create<T extends tbl_designation_masterCreateArgs>(args: SelectSubset<T, tbl_designation_masterCreateArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_designation_masters.
     * @param {tbl_designation_masterCreateManyArgs} args - Arguments to create many Tbl_designation_masters.
     * @example
     * // Create many Tbl_designation_masters
     * const tbl_designation_master = await prisma.tbl_designation_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_designation_masterCreateManyArgs>(args?: SelectSubset<T, tbl_designation_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_designation_master.
     * @param {tbl_designation_masterDeleteArgs} args - Arguments to delete one Tbl_designation_master.
     * @example
     * // Delete one Tbl_designation_master
     * const Tbl_designation_master = await prisma.tbl_designation_master.delete({
     *   where: {
     *     // ... filter to delete one Tbl_designation_master
     *   }
     * })
     * 
     */
    delete<T extends tbl_designation_masterDeleteArgs>(args: SelectSubset<T, tbl_designation_masterDeleteArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_designation_master.
     * @param {tbl_designation_masterUpdateArgs} args - Arguments to update one Tbl_designation_master.
     * @example
     * // Update one Tbl_designation_master
     * const tbl_designation_master = await prisma.tbl_designation_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_designation_masterUpdateArgs>(args: SelectSubset<T, tbl_designation_masterUpdateArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_designation_masters.
     * @param {tbl_designation_masterDeleteManyArgs} args - Arguments to filter Tbl_designation_masters to delete.
     * @example
     * // Delete a few Tbl_designation_masters
     * const { count } = await prisma.tbl_designation_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_designation_masterDeleteManyArgs>(args?: SelectSubset<T, tbl_designation_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_designation_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_designation_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_designation_masters
     * const tbl_designation_master = await prisma.tbl_designation_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_designation_masterUpdateManyArgs>(args: SelectSubset<T, tbl_designation_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_designation_master.
     * @param {tbl_designation_masterUpsertArgs} args - Arguments to update or create a Tbl_designation_master.
     * @example
     * // Update or create a Tbl_designation_master
     * const tbl_designation_master = await prisma.tbl_designation_master.upsert({
     *   create: {
     *     // ... data to create a Tbl_designation_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_designation_master we want to update
     *   }
     * })
     */
    upsert<T extends tbl_designation_masterUpsertArgs>(args: SelectSubset<T, tbl_designation_masterUpsertArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_designation_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_designation_masterCountArgs} args - Arguments to filter Tbl_designation_masters to count.
     * @example
     * // Count the number of Tbl_designation_masters
     * const count = await prisma.tbl_designation_master.count({
     *   where: {
     *     // ... the filter for the Tbl_designation_masters we want to count
     *   }
     * })
    **/
    count<T extends tbl_designation_masterCountArgs>(
      args?: Subset<T, tbl_designation_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_designation_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_designation_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_designation_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_designation_masterAggregateArgs>(args: Subset<T, Tbl_designation_masterAggregateArgs>): Prisma.PrismaPromise<GetTbl_designation_masterAggregateType<T>>

    /**
     * Group by Tbl_designation_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_designation_masterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_designation_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_designation_masterGroupByArgs['orderBy'] }
        : { orderBy?: tbl_designation_masterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_designation_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_designation_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_designation_master model
   */
  readonly fields: tbl_designation_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_designation_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_designation_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends tbl_designation_master$usersArgs<ExtArgs> = {}>(args?: Subset<T, tbl_designation_master$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamMembers<T extends tbl_designation_master$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, tbl_designation_master$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_designation_master model
   */
  interface tbl_designation_masterFieldRefs {
    readonly id: FieldRef<"tbl_designation_master", 'Int'>
    readonly designation_name: FieldRef<"tbl_designation_master", 'String'>
    readonly status: FieldRef<"tbl_designation_master", 'Int'>
    readonly is_deleted: FieldRef<"tbl_designation_master", 'Int'>
    readonly created_on: FieldRef<"tbl_designation_master", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_designation_master", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_designation_master findUnique
   */
  export type tbl_designation_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_designation_master to fetch.
     */
    where: tbl_designation_masterWhereUniqueInput
  }

  /**
   * tbl_designation_master findUniqueOrThrow
   */
  export type tbl_designation_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_designation_master to fetch.
     */
    where: tbl_designation_masterWhereUniqueInput
  }

  /**
   * tbl_designation_master findFirst
   */
  export type tbl_designation_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_designation_master to fetch.
     */
    where?: tbl_designation_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_designation_masters to fetch.
     */
    orderBy?: tbl_designation_masterOrderByWithRelationInput | tbl_designation_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_designation_masters.
     */
    cursor?: tbl_designation_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_designation_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_designation_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_designation_masters.
     */
    distinct?: Tbl_designation_masterScalarFieldEnum | Tbl_designation_masterScalarFieldEnum[]
  }

  /**
   * tbl_designation_master findFirstOrThrow
   */
  export type tbl_designation_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_designation_master to fetch.
     */
    where?: tbl_designation_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_designation_masters to fetch.
     */
    orderBy?: tbl_designation_masterOrderByWithRelationInput | tbl_designation_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_designation_masters.
     */
    cursor?: tbl_designation_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_designation_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_designation_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_designation_masters.
     */
    distinct?: Tbl_designation_masterScalarFieldEnum | Tbl_designation_masterScalarFieldEnum[]
  }

  /**
   * tbl_designation_master findMany
   */
  export type tbl_designation_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_designation_masters to fetch.
     */
    where?: tbl_designation_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_designation_masters to fetch.
     */
    orderBy?: tbl_designation_masterOrderByWithRelationInput | tbl_designation_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_designation_masters.
     */
    cursor?: tbl_designation_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_designation_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_designation_masters.
     */
    skip?: number
    distinct?: Tbl_designation_masterScalarFieldEnum | Tbl_designation_masterScalarFieldEnum[]
  }

  /**
   * tbl_designation_master create
   */
  export type tbl_designation_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_designation_master.
     */
    data: XOR<tbl_designation_masterCreateInput, tbl_designation_masterUncheckedCreateInput>
  }

  /**
   * tbl_designation_master createMany
   */
  export type tbl_designation_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_designation_masters.
     */
    data: tbl_designation_masterCreateManyInput | tbl_designation_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_designation_master update
   */
  export type tbl_designation_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_designation_master.
     */
    data: XOR<tbl_designation_masterUpdateInput, tbl_designation_masterUncheckedUpdateInput>
    /**
     * Choose, which tbl_designation_master to update.
     */
    where: tbl_designation_masterWhereUniqueInput
  }

  /**
   * tbl_designation_master updateMany
   */
  export type tbl_designation_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_designation_masters.
     */
    data: XOR<tbl_designation_masterUpdateManyMutationInput, tbl_designation_masterUncheckedUpdateManyInput>
    /**
     * Filter which tbl_designation_masters to update
     */
    where?: tbl_designation_masterWhereInput
    /**
     * Limit how many tbl_designation_masters to update.
     */
    limit?: number
  }

  /**
   * tbl_designation_master upsert
   */
  export type tbl_designation_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_designation_master to update in case it exists.
     */
    where: tbl_designation_masterWhereUniqueInput
    /**
     * In case the tbl_designation_master found by the `where` argument doesn't exist, create a new tbl_designation_master with this data.
     */
    create: XOR<tbl_designation_masterCreateInput, tbl_designation_masterUncheckedCreateInput>
    /**
     * In case the tbl_designation_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_designation_masterUpdateInput, tbl_designation_masterUncheckedUpdateInput>
  }

  /**
   * tbl_designation_master delete
   */
  export type tbl_designation_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    /**
     * Filter which tbl_designation_master to delete.
     */
    where: tbl_designation_masterWhereUniqueInput
  }

  /**
   * tbl_designation_master deleteMany
   */
  export type tbl_designation_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_designation_masters to delete
     */
    where?: tbl_designation_masterWhereInput
    /**
     * Limit how many tbl_designation_masters to delete.
     */
    limit?: number
  }

  /**
   * tbl_designation_master.users
   */
  export type tbl_designation_master$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * tbl_designation_master.teamMembers
   */
  export type tbl_designation_master$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    where?: tbl_our_teamWhereInput
    orderBy?: tbl_our_teamOrderByWithRelationInput | tbl_our_teamOrderByWithRelationInput[]
    cursor?: tbl_our_teamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_our_teamScalarFieldEnum | Tbl_our_teamScalarFieldEnum[]
  }

  /**
   * tbl_designation_master without action
   */
  export type tbl_designation_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
  }


  /**
   * Model tbl_status_master
   */

  export type AggregateTbl_status_master = {
    _count: Tbl_status_masterCountAggregateOutputType | null
    _avg: Tbl_status_masterAvgAggregateOutputType | null
    _sum: Tbl_status_masterSumAggregateOutputType | null
    _min: Tbl_status_masterMinAggregateOutputType | null
    _max: Tbl_status_masterMaxAggregateOutputType | null
  }

  export type Tbl_status_masterAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_status_masterSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_status_masterMinAggregateOutputType = {
    id: number | null
    service_name: string | null
    status_name: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_status_masterMaxAggregateOutputType = {
    id: number | null
    service_name: string | null
    status_name: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_status_masterCountAggregateOutputType = {
    id: number
    service_name: number
    status_name: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_status_masterAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_status_masterSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_status_masterMinAggregateInputType = {
    id?: true
    service_name?: true
    status_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_status_masterMaxAggregateInputType = {
    id?: true
    service_name?: true
    status_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_status_masterCountAggregateInputType = {
    id?: true
    service_name?: true
    status_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_status_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_status_master to aggregate.
     */
    where?: tbl_status_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_status_masters to fetch.
     */
    orderBy?: tbl_status_masterOrderByWithRelationInput | tbl_status_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_status_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_status_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_status_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_status_masters
    **/
    _count?: true | Tbl_status_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_status_masterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_status_masterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_status_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_status_masterMaxAggregateInputType
  }

  export type GetTbl_status_masterAggregateType<T extends Tbl_status_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_status_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_status_master[P]>
      : GetScalarType<T[P], AggregateTbl_status_master[P]>
  }




  export type tbl_status_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_status_masterWhereInput
    orderBy?: tbl_status_masterOrderByWithAggregationInput | tbl_status_masterOrderByWithAggregationInput[]
    by: Tbl_status_masterScalarFieldEnum[] | Tbl_status_masterScalarFieldEnum
    having?: tbl_status_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_status_masterCountAggregateInputType | true
    _avg?: Tbl_status_masterAvgAggregateInputType
    _sum?: Tbl_status_masterSumAggregateInputType
    _min?: Tbl_status_masterMinAggregateInputType
    _max?: Tbl_status_masterMaxAggregateInputType
  }

  export type Tbl_status_masterGroupByOutputType = {
    id: number
    service_name: string
    status_name: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_status_masterCountAggregateOutputType | null
    _avg: Tbl_status_masterAvgAggregateOutputType | null
    _sum: Tbl_status_masterSumAggregateOutputType | null
    _min: Tbl_status_masterMinAggregateOutputType | null
    _max: Tbl_status_masterMaxAggregateOutputType | null
  }

  type GetTbl_status_masterGroupByPayload<T extends tbl_status_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_status_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_status_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_status_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_status_masterGroupByOutputType[P]>
        }
      >
    >


  export type tbl_status_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_name?: boolean
    status_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }, ExtArgs["result"]["tbl_status_master"]>



  export type tbl_status_masterSelectScalar = {
    id?: boolean
    service_name?: boolean
    status_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_status_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_name" | "status_name" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_status_master"]>

  export type $tbl_status_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_status_master"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      service_name: string
      status_name: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_status_master"]>
    composites: {}
  }

  type tbl_status_masterGetPayload<S extends boolean | null | undefined | tbl_status_masterDefaultArgs> = $Result.GetResult<Prisma.$tbl_status_masterPayload, S>

  type tbl_status_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_status_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_status_masterCountAggregateInputType | true
    }

  export interface tbl_status_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_status_master'], meta: { name: 'tbl_status_master' } }
    /**
     * Find zero or one Tbl_status_master that matches the filter.
     * @param {tbl_status_masterFindUniqueArgs} args - Arguments to find a Tbl_status_master
     * @example
     * // Get one Tbl_status_master
     * const tbl_status_master = await prisma.tbl_status_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_status_masterFindUniqueArgs>(args: SelectSubset<T, tbl_status_masterFindUniqueArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_status_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_status_masterFindUniqueOrThrowArgs} args - Arguments to find a Tbl_status_master
     * @example
     * // Get one Tbl_status_master
     * const tbl_status_master = await prisma.tbl_status_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_status_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_status_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_status_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_masterFindFirstArgs} args - Arguments to find a Tbl_status_master
     * @example
     * // Get one Tbl_status_master
     * const tbl_status_master = await prisma.tbl_status_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_status_masterFindFirstArgs>(args?: SelectSubset<T, tbl_status_masterFindFirstArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_status_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_masterFindFirstOrThrowArgs} args - Arguments to find a Tbl_status_master
     * @example
     * // Get one Tbl_status_master
     * const tbl_status_master = await prisma.tbl_status_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_status_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_status_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_status_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_status_masters
     * const tbl_status_masters = await prisma.tbl_status_master.findMany()
     * 
     * // Get first 10 Tbl_status_masters
     * const tbl_status_masters = await prisma.tbl_status_master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_status_masterWithIdOnly = await prisma.tbl_status_master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_status_masterFindManyArgs>(args?: SelectSubset<T, tbl_status_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_status_master.
     * @param {tbl_status_masterCreateArgs} args - Arguments to create a Tbl_status_master.
     * @example
     * // Create one Tbl_status_master
     * const Tbl_status_master = await prisma.tbl_status_master.create({
     *   data: {
     *     // ... data to create a Tbl_status_master
     *   }
     * })
     * 
     */
    create<T extends tbl_status_masterCreateArgs>(args: SelectSubset<T, tbl_status_masterCreateArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_status_masters.
     * @param {tbl_status_masterCreateManyArgs} args - Arguments to create many Tbl_status_masters.
     * @example
     * // Create many Tbl_status_masters
     * const tbl_status_master = await prisma.tbl_status_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_status_masterCreateManyArgs>(args?: SelectSubset<T, tbl_status_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_status_master.
     * @param {tbl_status_masterDeleteArgs} args - Arguments to delete one Tbl_status_master.
     * @example
     * // Delete one Tbl_status_master
     * const Tbl_status_master = await prisma.tbl_status_master.delete({
     *   where: {
     *     // ... filter to delete one Tbl_status_master
     *   }
     * })
     * 
     */
    delete<T extends tbl_status_masterDeleteArgs>(args: SelectSubset<T, tbl_status_masterDeleteArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_status_master.
     * @param {tbl_status_masterUpdateArgs} args - Arguments to update one Tbl_status_master.
     * @example
     * // Update one Tbl_status_master
     * const tbl_status_master = await prisma.tbl_status_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_status_masterUpdateArgs>(args: SelectSubset<T, tbl_status_masterUpdateArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_status_masters.
     * @param {tbl_status_masterDeleteManyArgs} args - Arguments to filter Tbl_status_masters to delete.
     * @example
     * // Delete a few Tbl_status_masters
     * const { count } = await prisma.tbl_status_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_status_masterDeleteManyArgs>(args?: SelectSubset<T, tbl_status_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_status_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_status_masters
     * const tbl_status_master = await prisma.tbl_status_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_status_masterUpdateManyArgs>(args: SelectSubset<T, tbl_status_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_status_master.
     * @param {tbl_status_masterUpsertArgs} args - Arguments to update or create a Tbl_status_master.
     * @example
     * // Update or create a Tbl_status_master
     * const tbl_status_master = await prisma.tbl_status_master.upsert({
     *   create: {
     *     // ... data to create a Tbl_status_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_status_master we want to update
     *   }
     * })
     */
    upsert<T extends tbl_status_masterUpsertArgs>(args: SelectSubset<T, tbl_status_masterUpsertArgs<ExtArgs>>): Prisma__tbl_status_masterClient<$Result.GetResult<Prisma.$tbl_status_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_status_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_masterCountArgs} args - Arguments to filter Tbl_status_masters to count.
     * @example
     * // Count the number of Tbl_status_masters
     * const count = await prisma.tbl_status_master.count({
     *   where: {
     *     // ... the filter for the Tbl_status_masters we want to count
     *   }
     * })
    **/
    count<T extends tbl_status_masterCountArgs>(
      args?: Subset<T, tbl_status_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_status_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_status_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_status_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_status_masterAggregateArgs>(args: Subset<T, Tbl_status_masterAggregateArgs>): Prisma.PrismaPromise<GetTbl_status_masterAggregateType<T>>

    /**
     * Group by Tbl_status_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_status_masterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_status_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_status_masterGroupByArgs['orderBy'] }
        : { orderBy?: tbl_status_masterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_status_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_status_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_status_master model
   */
  readonly fields: tbl_status_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_status_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_status_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_status_master model
   */
  interface tbl_status_masterFieldRefs {
    readonly id: FieldRef<"tbl_status_master", 'Int'>
    readonly service_name: FieldRef<"tbl_status_master", 'String'>
    readonly status_name: FieldRef<"tbl_status_master", 'String'>
    readonly status: FieldRef<"tbl_status_master", 'Int'>
    readonly is_deleted: FieldRef<"tbl_status_master", 'Int'>
    readonly created_on: FieldRef<"tbl_status_master", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_status_master", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_status_master findUnique
   */
  export type tbl_status_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * Filter, which tbl_status_master to fetch.
     */
    where: tbl_status_masterWhereUniqueInput
  }

  /**
   * tbl_status_master findUniqueOrThrow
   */
  export type tbl_status_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * Filter, which tbl_status_master to fetch.
     */
    where: tbl_status_masterWhereUniqueInput
  }

  /**
   * tbl_status_master findFirst
   */
  export type tbl_status_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * Filter, which tbl_status_master to fetch.
     */
    where?: tbl_status_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_status_masters to fetch.
     */
    orderBy?: tbl_status_masterOrderByWithRelationInput | tbl_status_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_status_masters.
     */
    cursor?: tbl_status_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_status_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_status_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_status_masters.
     */
    distinct?: Tbl_status_masterScalarFieldEnum | Tbl_status_masterScalarFieldEnum[]
  }

  /**
   * tbl_status_master findFirstOrThrow
   */
  export type tbl_status_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * Filter, which tbl_status_master to fetch.
     */
    where?: tbl_status_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_status_masters to fetch.
     */
    orderBy?: tbl_status_masterOrderByWithRelationInput | tbl_status_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_status_masters.
     */
    cursor?: tbl_status_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_status_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_status_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_status_masters.
     */
    distinct?: Tbl_status_masterScalarFieldEnum | Tbl_status_masterScalarFieldEnum[]
  }

  /**
   * tbl_status_master findMany
   */
  export type tbl_status_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * Filter, which tbl_status_masters to fetch.
     */
    where?: tbl_status_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_status_masters to fetch.
     */
    orderBy?: tbl_status_masterOrderByWithRelationInput | tbl_status_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_status_masters.
     */
    cursor?: tbl_status_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_status_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_status_masters.
     */
    skip?: number
    distinct?: Tbl_status_masterScalarFieldEnum | Tbl_status_masterScalarFieldEnum[]
  }

  /**
   * tbl_status_master create
   */
  export type tbl_status_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_status_master.
     */
    data: XOR<tbl_status_masterCreateInput, tbl_status_masterUncheckedCreateInput>
  }

  /**
   * tbl_status_master createMany
   */
  export type tbl_status_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_status_masters.
     */
    data: tbl_status_masterCreateManyInput | tbl_status_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_status_master update
   */
  export type tbl_status_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_status_master.
     */
    data: XOR<tbl_status_masterUpdateInput, tbl_status_masterUncheckedUpdateInput>
    /**
     * Choose, which tbl_status_master to update.
     */
    where: tbl_status_masterWhereUniqueInput
  }

  /**
   * tbl_status_master updateMany
   */
  export type tbl_status_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_status_masters.
     */
    data: XOR<tbl_status_masterUpdateManyMutationInput, tbl_status_masterUncheckedUpdateManyInput>
    /**
     * Filter which tbl_status_masters to update
     */
    where?: tbl_status_masterWhereInput
    /**
     * Limit how many tbl_status_masters to update.
     */
    limit?: number
  }

  /**
   * tbl_status_master upsert
   */
  export type tbl_status_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_status_master to update in case it exists.
     */
    where: tbl_status_masterWhereUniqueInput
    /**
     * In case the tbl_status_master found by the `where` argument doesn't exist, create a new tbl_status_master with this data.
     */
    create: XOR<tbl_status_masterCreateInput, tbl_status_masterUncheckedCreateInput>
    /**
     * In case the tbl_status_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_status_masterUpdateInput, tbl_status_masterUncheckedUpdateInput>
  }

  /**
   * tbl_status_master delete
   */
  export type tbl_status_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
    /**
     * Filter which tbl_status_master to delete.
     */
    where: tbl_status_masterWhereUniqueInput
  }

  /**
   * tbl_status_master deleteMany
   */
  export type tbl_status_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_status_masters to delete
     */
    where?: tbl_status_masterWhereInput
    /**
     * Limit how many tbl_status_masters to delete.
     */
    limit?: number
  }

  /**
   * tbl_status_master without action
   */
  export type tbl_status_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_status_master
     */
    select?: tbl_status_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_status_master
     */
    omit?: tbl_status_masterOmit<ExtArgs> | null
  }


  /**
   * Model tbl_department_master
   */

  export type AggregateTbl_department_master = {
    _count: Tbl_department_masterCountAggregateOutputType | null
    _avg: Tbl_department_masterAvgAggregateOutputType | null
    _sum: Tbl_department_masterSumAggregateOutputType | null
    _min: Tbl_department_masterMinAggregateOutputType | null
    _max: Tbl_department_masterMaxAggregateOutputType | null
  }

  export type Tbl_department_masterAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_department_masterSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_department_masterMinAggregateOutputType = {
    id: number | null
    department_name: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_department_masterMaxAggregateOutputType = {
    id: number | null
    department_name: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_department_masterCountAggregateOutputType = {
    id: number
    department_name: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_department_masterAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_department_masterSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_department_masterMinAggregateInputType = {
    id?: true
    department_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_department_masterMaxAggregateInputType = {
    id?: true
    department_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_department_masterCountAggregateInputType = {
    id?: true
    department_name?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_department_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_department_master to aggregate.
     */
    where?: tbl_department_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_department_masters to fetch.
     */
    orderBy?: tbl_department_masterOrderByWithRelationInput | tbl_department_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_department_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_department_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_department_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_department_masters
    **/
    _count?: true | Tbl_department_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_department_masterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_department_masterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_department_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_department_masterMaxAggregateInputType
  }

  export type GetTbl_department_masterAggregateType<T extends Tbl_department_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_department_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_department_master[P]>
      : GetScalarType<T[P], AggregateTbl_department_master[P]>
  }




  export type tbl_department_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_department_masterWhereInput
    orderBy?: tbl_department_masterOrderByWithAggregationInput | tbl_department_masterOrderByWithAggregationInput[]
    by: Tbl_department_masterScalarFieldEnum[] | Tbl_department_masterScalarFieldEnum
    having?: tbl_department_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_department_masterCountAggregateInputType | true
    _avg?: Tbl_department_masterAvgAggregateInputType
    _sum?: Tbl_department_masterSumAggregateInputType
    _min?: Tbl_department_masterMinAggregateInputType
    _max?: Tbl_department_masterMaxAggregateInputType
  }

  export type Tbl_department_masterGroupByOutputType = {
    id: number
    department_name: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_department_masterCountAggregateOutputType | null
    _avg: Tbl_department_masterAvgAggregateOutputType | null
    _sum: Tbl_department_masterSumAggregateOutputType | null
    _min: Tbl_department_masterMinAggregateOutputType | null
    _max: Tbl_department_masterMaxAggregateOutputType | null
  }

  type GetTbl_department_masterGroupByPayload<T extends tbl_department_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_department_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_department_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_department_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_department_masterGroupByOutputType[P]>
        }
      >
    >


  export type tbl_department_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
    users?: boolean | tbl_department_master$usersArgs<ExtArgs>
    _count?: boolean | Tbl_department_masterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_department_master"]>



  export type tbl_department_masterSelectScalar = {
    id?: boolean
    department_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_department_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "department_name" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_department_master"]>
  export type tbl_department_masterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | tbl_department_master$usersArgs<ExtArgs>
    _count?: boolean | Tbl_department_masterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_department_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_department_master"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      department_name: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_department_master"]>
    composites: {}
  }

  type tbl_department_masterGetPayload<S extends boolean | null | undefined | tbl_department_masterDefaultArgs> = $Result.GetResult<Prisma.$tbl_department_masterPayload, S>

  type tbl_department_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_department_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_department_masterCountAggregateInputType | true
    }

  export interface tbl_department_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_department_master'], meta: { name: 'tbl_department_master' } }
    /**
     * Find zero or one Tbl_department_master that matches the filter.
     * @param {tbl_department_masterFindUniqueArgs} args - Arguments to find a Tbl_department_master
     * @example
     * // Get one Tbl_department_master
     * const tbl_department_master = await prisma.tbl_department_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_department_masterFindUniqueArgs>(args: SelectSubset<T, tbl_department_masterFindUniqueArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_department_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_department_masterFindUniqueOrThrowArgs} args - Arguments to find a Tbl_department_master
     * @example
     * // Get one Tbl_department_master
     * const tbl_department_master = await prisma.tbl_department_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_department_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_department_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_department_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_department_masterFindFirstArgs} args - Arguments to find a Tbl_department_master
     * @example
     * // Get one Tbl_department_master
     * const tbl_department_master = await prisma.tbl_department_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_department_masterFindFirstArgs>(args?: SelectSubset<T, tbl_department_masterFindFirstArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_department_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_department_masterFindFirstOrThrowArgs} args - Arguments to find a Tbl_department_master
     * @example
     * // Get one Tbl_department_master
     * const tbl_department_master = await prisma.tbl_department_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_department_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_department_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_department_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_department_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_department_masters
     * const tbl_department_masters = await prisma.tbl_department_master.findMany()
     * 
     * // Get first 10 Tbl_department_masters
     * const tbl_department_masters = await prisma.tbl_department_master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_department_masterWithIdOnly = await prisma.tbl_department_master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_department_masterFindManyArgs>(args?: SelectSubset<T, tbl_department_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_department_master.
     * @param {tbl_department_masterCreateArgs} args - Arguments to create a Tbl_department_master.
     * @example
     * // Create one Tbl_department_master
     * const Tbl_department_master = await prisma.tbl_department_master.create({
     *   data: {
     *     // ... data to create a Tbl_department_master
     *   }
     * })
     * 
     */
    create<T extends tbl_department_masterCreateArgs>(args: SelectSubset<T, tbl_department_masterCreateArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_department_masters.
     * @param {tbl_department_masterCreateManyArgs} args - Arguments to create many Tbl_department_masters.
     * @example
     * // Create many Tbl_department_masters
     * const tbl_department_master = await prisma.tbl_department_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_department_masterCreateManyArgs>(args?: SelectSubset<T, tbl_department_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_department_master.
     * @param {tbl_department_masterDeleteArgs} args - Arguments to delete one Tbl_department_master.
     * @example
     * // Delete one Tbl_department_master
     * const Tbl_department_master = await prisma.tbl_department_master.delete({
     *   where: {
     *     // ... filter to delete one Tbl_department_master
     *   }
     * })
     * 
     */
    delete<T extends tbl_department_masterDeleteArgs>(args: SelectSubset<T, tbl_department_masterDeleteArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_department_master.
     * @param {tbl_department_masterUpdateArgs} args - Arguments to update one Tbl_department_master.
     * @example
     * // Update one Tbl_department_master
     * const tbl_department_master = await prisma.tbl_department_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_department_masterUpdateArgs>(args: SelectSubset<T, tbl_department_masterUpdateArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_department_masters.
     * @param {tbl_department_masterDeleteManyArgs} args - Arguments to filter Tbl_department_masters to delete.
     * @example
     * // Delete a few Tbl_department_masters
     * const { count } = await prisma.tbl_department_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_department_masterDeleteManyArgs>(args?: SelectSubset<T, tbl_department_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_department_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_department_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_department_masters
     * const tbl_department_master = await prisma.tbl_department_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_department_masterUpdateManyArgs>(args: SelectSubset<T, tbl_department_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_department_master.
     * @param {tbl_department_masterUpsertArgs} args - Arguments to update or create a Tbl_department_master.
     * @example
     * // Update or create a Tbl_department_master
     * const tbl_department_master = await prisma.tbl_department_master.upsert({
     *   create: {
     *     // ... data to create a Tbl_department_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_department_master we want to update
     *   }
     * })
     */
    upsert<T extends tbl_department_masterUpsertArgs>(args: SelectSubset<T, tbl_department_masterUpsertArgs<ExtArgs>>): Prisma__tbl_department_masterClient<$Result.GetResult<Prisma.$tbl_department_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_department_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_department_masterCountArgs} args - Arguments to filter Tbl_department_masters to count.
     * @example
     * // Count the number of Tbl_department_masters
     * const count = await prisma.tbl_department_master.count({
     *   where: {
     *     // ... the filter for the Tbl_department_masters we want to count
     *   }
     * })
    **/
    count<T extends tbl_department_masterCountArgs>(
      args?: Subset<T, tbl_department_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_department_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_department_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_department_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_department_masterAggregateArgs>(args: Subset<T, Tbl_department_masterAggregateArgs>): Prisma.PrismaPromise<GetTbl_department_masterAggregateType<T>>

    /**
     * Group by Tbl_department_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_department_masterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_department_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_department_masterGroupByArgs['orderBy'] }
        : { orderBy?: tbl_department_masterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_department_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_department_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_department_master model
   */
  readonly fields: tbl_department_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_department_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_department_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends tbl_department_master$usersArgs<ExtArgs> = {}>(args?: Subset<T, tbl_department_master$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_department_master model
   */
  interface tbl_department_masterFieldRefs {
    readonly id: FieldRef<"tbl_department_master", 'Int'>
    readonly department_name: FieldRef<"tbl_department_master", 'String'>
    readonly status: FieldRef<"tbl_department_master", 'Int'>
    readonly is_deleted: FieldRef<"tbl_department_master", 'Int'>
    readonly created_on: FieldRef<"tbl_department_master", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_department_master", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_department_master findUnique
   */
  export type tbl_department_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_department_master to fetch.
     */
    where: tbl_department_masterWhereUniqueInput
  }

  /**
   * tbl_department_master findUniqueOrThrow
   */
  export type tbl_department_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_department_master to fetch.
     */
    where: tbl_department_masterWhereUniqueInput
  }

  /**
   * tbl_department_master findFirst
   */
  export type tbl_department_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_department_master to fetch.
     */
    where?: tbl_department_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_department_masters to fetch.
     */
    orderBy?: tbl_department_masterOrderByWithRelationInput | tbl_department_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_department_masters.
     */
    cursor?: tbl_department_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_department_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_department_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_department_masters.
     */
    distinct?: Tbl_department_masterScalarFieldEnum | Tbl_department_masterScalarFieldEnum[]
  }

  /**
   * tbl_department_master findFirstOrThrow
   */
  export type tbl_department_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_department_master to fetch.
     */
    where?: tbl_department_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_department_masters to fetch.
     */
    orderBy?: tbl_department_masterOrderByWithRelationInput | tbl_department_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_department_masters.
     */
    cursor?: tbl_department_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_department_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_department_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_department_masters.
     */
    distinct?: Tbl_department_masterScalarFieldEnum | Tbl_department_masterScalarFieldEnum[]
  }

  /**
   * tbl_department_master findMany
   */
  export type tbl_department_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * Filter, which tbl_department_masters to fetch.
     */
    where?: tbl_department_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_department_masters to fetch.
     */
    orderBy?: tbl_department_masterOrderByWithRelationInput | tbl_department_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_department_masters.
     */
    cursor?: tbl_department_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_department_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_department_masters.
     */
    skip?: number
    distinct?: Tbl_department_masterScalarFieldEnum | Tbl_department_masterScalarFieldEnum[]
  }

  /**
   * tbl_department_master create
   */
  export type tbl_department_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_department_master.
     */
    data: XOR<tbl_department_masterCreateInput, tbl_department_masterUncheckedCreateInput>
  }

  /**
   * tbl_department_master createMany
   */
  export type tbl_department_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_department_masters.
     */
    data: tbl_department_masterCreateManyInput | tbl_department_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_department_master update
   */
  export type tbl_department_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_department_master.
     */
    data: XOR<tbl_department_masterUpdateInput, tbl_department_masterUncheckedUpdateInput>
    /**
     * Choose, which tbl_department_master to update.
     */
    where: tbl_department_masterWhereUniqueInput
  }

  /**
   * tbl_department_master updateMany
   */
  export type tbl_department_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_department_masters.
     */
    data: XOR<tbl_department_masterUpdateManyMutationInput, tbl_department_masterUncheckedUpdateManyInput>
    /**
     * Filter which tbl_department_masters to update
     */
    where?: tbl_department_masterWhereInput
    /**
     * Limit how many tbl_department_masters to update.
     */
    limit?: number
  }

  /**
   * tbl_department_master upsert
   */
  export type tbl_department_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_department_master to update in case it exists.
     */
    where: tbl_department_masterWhereUniqueInput
    /**
     * In case the tbl_department_master found by the `where` argument doesn't exist, create a new tbl_department_master with this data.
     */
    create: XOR<tbl_department_masterCreateInput, tbl_department_masterUncheckedCreateInput>
    /**
     * In case the tbl_department_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_department_masterUpdateInput, tbl_department_masterUncheckedUpdateInput>
  }

  /**
   * tbl_department_master delete
   */
  export type tbl_department_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
    /**
     * Filter which tbl_department_master to delete.
     */
    where: tbl_department_masterWhereUniqueInput
  }

  /**
   * tbl_department_master deleteMany
   */
  export type tbl_department_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_department_masters to delete
     */
    where?: tbl_department_masterWhereInput
    /**
     * Limit how many tbl_department_masters to delete.
     */
    limit?: number
  }

  /**
   * tbl_department_master.users
   */
  export type tbl_department_master$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * tbl_department_master without action
   */
  export type tbl_department_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_department_master
     */
    select?: tbl_department_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_department_master
     */
    omit?: tbl_department_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_department_masterInclude<ExtArgs> | null
  }


  /**
   * Model BlogCategory
   */

  export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null
    _avg: BlogCategoryAvgAggregateOutputType | null
    _sum: BlogCategorySumAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  export type BlogCategoryAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlogCategorySumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlogCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: number | null
    is_deleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: number | null
    is_deleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCategoryCountAggregateOutputType = {
    id: number
    name: number
    status: number
    is_deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogCategoryAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type BlogCategorySumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type BlogCategoryMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCategoryCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategory to aggregate.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogCategories
    **/
    _count?: true | BlogCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogCategory[P]>
      : GetScalarType<T[P], AggregateBlogCategory[P]>
  }




  export type BlogCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithAggregationInput | BlogCategoryOrderByWithAggregationInput[]
    by: BlogCategoryScalarFieldEnum[] | BlogCategoryScalarFieldEnum
    having?: BlogCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCategoryCountAggregateInputType | true
    _avg?: BlogCategoryAvgAggregateInputType
    _sum?: BlogCategorySumAggregateInputType
    _min?: BlogCategoryMinAggregateInputType
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type BlogCategoryGroupByOutputType = {
    id: number
    name: string
    status: number
    is_deleted: number
    createdAt: Date
    updatedAt: Date
    _count: BlogCategoryCountAggregateOutputType | null
    _avg: BlogCategoryAvgAggregateOutputType | null
    _sum: BlogCategorySumAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogs?: boolean | BlogCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>



  export type BlogCategorySelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "is_deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["blogCategory"]>
  export type BlogCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BlogCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogCategory"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: number
      is_deleted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogCategory"]>
    composites: {}
  }

  type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogCategoryPayload, S>

  type BlogCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCategoryCountAggregateInputType | true
    }

  export interface BlogCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'], meta: { name: 'BlogCategory' } }
    /**
     * Find zero or one BlogCategory that matches the filter.
     * @param {BlogCategoryFindUniqueArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany()
     * 
     * // Get first 10 BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCategoryFindManyArgs>(args?: SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogCategory.
     * @param {BlogCategoryCreateArgs} args - Arguments to create a BlogCategory.
     * @example
     * // Create one BlogCategory
     * const BlogCategory = await prisma.blogCategory.create({
     *   data: {
     *     // ... data to create a BlogCategory
     *   }
     * })
     * 
     */
    create<T extends BlogCategoryCreateArgs>(args: SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogCategories.
     * @param {BlogCategoryCreateManyArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCategoryCreateManyArgs>(args?: SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlogCategory.
     * @param {BlogCategoryDeleteArgs} args - Arguments to delete one BlogCategory.
     * @example
     * // Delete one BlogCategory
     * const BlogCategory = await prisma.blogCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogCategoryDeleteArgs>(args: SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogCategory.
     * @param {BlogCategoryUpdateArgs} args - Arguments to update one BlogCategory.
     * @example
     * // Update one BlogCategory
     * const blogCategory = await prisma.blogCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCategoryUpdateArgs>(args: SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogCategories.
     * @param {BlogCategoryDeleteManyArgs} args - Arguments to filter BlogCategories to delete.
     * @example
     * // Delete a few BlogCategories
     * const { count } = await prisma.blogCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogCategory.
     * @param {BlogCategoryUpsertArgs} args - Arguments to update or create a BlogCategory.
     * @example
     * // Update or create a BlogCategory
     * const blogCategory = await prisma.blogCategory.upsert({
     *   create: {
     *     // ... data to create a BlogCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogCategoryUpsertArgs>(args: SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryCountArgs} args - Arguments to filter BlogCategories to count.
     * @example
     * // Count the number of BlogCategories
     * const count = await prisma.blogCategory.count({
     *   where: {
     *     // ... the filter for the BlogCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogCategoryCountArgs>(
      args?: Subset<T, BlogCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCategoryAggregateArgs>(args: Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>

    /**
     * Group by BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogCategory model
   */
  readonly fields: BlogCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogCategory$blogsArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogCategory model
   */
  interface BlogCategoryFieldRefs {
    readonly id: FieldRef<"BlogCategory", 'Int'>
    readonly name: FieldRef<"BlogCategory", 'String'>
    readonly status: FieldRef<"BlogCategory", 'Int'>
    readonly is_deleted: FieldRef<"BlogCategory", 'Int'>
    readonly createdAt: FieldRef<"BlogCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogCategory findUnique
   */
  export type BlogCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findUniqueOrThrow
   */
  export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findFirst
   */
  export type BlogCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findFirstOrThrow
   */
  export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findMany
   */
  export type BlogCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategories to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory create
   */
  export type BlogCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogCategory.
     */
    data: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
  }

  /**
   * BlogCategory createMany
   */
  export type BlogCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory update
   */
  export type BlogCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogCategory.
     */
    data: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogCategory to update.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory updateMany
   */
  export type BlogCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory upsert
   */
  export type BlogCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogCategory to update in case it exists.
     */
    where: BlogCategoryWhereUniqueInput
    /**
     * In case the BlogCategory found by the `where` argument doesn't exist, create a new BlogCategory with this data.
     */
    create: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
    /**
     * In case the BlogCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
  }

  /**
   * BlogCategory delete
   */
  export type BlogCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogCategory to delete.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory deleteMany
   */
  export type BlogCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategories to delete
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to delete.
     */
    limit?: number
  }

  /**
   * BlogCategory.blogs
   */
  export type BlogCategory$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * BlogCategory without action
   */
  export type BlogCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    meta_url: string | null
    meta_keyword: string | null
    author: string | null
    tag: string | null
    meta_description: string | null
    category_id: number | null
    blog_image: string | null
    short_description: string | null
    blog_content: string | null
    status: number | null
    is_deleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    meta_url: string | null
    meta_keyword: string | null
    author: string | null
    tag: string | null
    meta_description: string | null
    category_id: number | null
    blog_image: string | null
    short_description: string | null
    blog_content: string | null
    status: number | null
    is_deleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    meta_url: number
    meta_keyword: number
    author: number
    tag: number
    meta_description: number
    category_id: number
    blog_image: number
    short_description: number
    blog_content: number
    status: number
    is_deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    category_id?: true
    status?: true
    is_deleted?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    category_id?: true
    status?: true
    is_deleted?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    meta_url?: true
    meta_keyword?: true
    author?: true
    tag?: true
    meta_description?: true
    category_id?: true
    blog_image?: true
    short_description?: true
    blog_content?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    meta_url?: true
    meta_keyword?: true
    author?: true
    tag?: true
    meta_description?: true
    category_id?: true
    blog_image?: true
    short_description?: true
    blog_content?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    meta_url?: true
    meta_keyword?: true
    author?: true
    tag?: true
    meta_description?: true
    category_id?: true
    blog_image?: true
    short_description?: true
    blog_content?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description: string | null
    category_id: number
    blog_image: string | null
    short_description: string
    blog_content: string
    status: number
    is_deleted: number
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    meta_url?: boolean
    meta_keyword?: boolean
    author?: boolean
    tag?: boolean
    meta_description?: boolean
    category_id?: boolean
    blog_image?: boolean
    short_description?: boolean
    blog_content?: boolean
    status?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>



  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    meta_url?: boolean
    meta_keyword?: boolean
    author?: boolean
    tag?: boolean
    meta_description?: boolean
    category_id?: boolean
    blog_image?: boolean
    short_description?: boolean
    blog_content?: boolean
    status?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "meta_url" | "meta_keyword" | "author" | "tag" | "meta_description" | "category_id" | "blog_image" | "short_description" | "blog_content" | "status" | "is_deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      category: Prisma.$BlogCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      meta_url: string
      meta_keyword: string
      author: string
      tag: string
      meta_description: string | null
      category_id: number
      blog_image: string | null
      short_description: string
      blog_content: string
      status: number
      is_deleted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategoryDefaultArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly meta_url: FieldRef<"Blog", 'String'>
    readonly meta_keyword: FieldRef<"Blog", 'String'>
    readonly author: FieldRef<"Blog", 'String'>
    readonly tag: FieldRef<"Blog", 'String'>
    readonly meta_description: FieldRef<"Blog", 'String'>
    readonly category_id: FieldRef<"Blog", 'Int'>
    readonly blog_image: FieldRef<"Blog", 'String'>
    readonly short_description: FieldRef<"Blog", 'String'>
    readonly blog_content: FieldRef<"Blog", 'String'>
    readonly status: FieldRef<"Blog", 'Int'>
    readonly is_deleted: FieldRef<"Blog", 'Int'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model tbl_press_release
   */

  export type AggregateTbl_press_release = {
    _count: Tbl_press_releaseCountAggregateOutputType | null
    _avg: Tbl_press_releaseAvgAggregateOutputType | null
    _sum: Tbl_press_releaseSumAggregateOutputType | null
    _min: Tbl_press_releaseMinAggregateOutputType | null
    _max: Tbl_press_releaseMaxAggregateOutputType | null
  }

  export type Tbl_press_releaseAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_press_releaseSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_press_releaseMinAggregateOutputType = {
    id: number | null
    title: string | null
    meta_url: string | null
    meta_keyword: string | null
    author: string | null
    tag: string | null
    meta_description: string | null
    press_release_image: string | null
    short_description: string | null
    press_release_content: string | null
    status: number | null
    is_deleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tbl_press_releaseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    meta_url: string | null
    meta_keyword: string | null
    author: string | null
    tag: string | null
    meta_description: string | null
    press_release_image: string | null
    short_description: string | null
    press_release_content: string | null
    status: number | null
    is_deleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tbl_press_releaseCountAggregateOutputType = {
    id: number
    title: number
    meta_url: number
    meta_keyword: number
    author: number
    tag: number
    meta_description: number
    press_release_image: number
    short_description: number
    press_release_content: number
    status: number
    is_deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Tbl_press_releaseAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_press_releaseSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_press_releaseMinAggregateInputType = {
    id?: true
    title?: true
    meta_url?: true
    meta_keyword?: true
    author?: true
    tag?: true
    meta_description?: true
    press_release_image?: true
    short_description?: true
    press_release_content?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tbl_press_releaseMaxAggregateInputType = {
    id?: true
    title?: true
    meta_url?: true
    meta_keyword?: true
    author?: true
    tag?: true
    meta_description?: true
    press_release_image?: true
    short_description?: true
    press_release_content?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tbl_press_releaseCountAggregateInputType = {
    id?: true
    title?: true
    meta_url?: true
    meta_keyword?: true
    author?: true
    tag?: true
    meta_description?: true
    press_release_image?: true
    short_description?: true
    press_release_content?: true
    status?: true
    is_deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Tbl_press_releaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_press_release to aggregate.
     */
    where?: tbl_press_releaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_press_releases to fetch.
     */
    orderBy?: tbl_press_releaseOrderByWithRelationInput | tbl_press_releaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_press_releaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_press_releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_press_releases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_press_releases
    **/
    _count?: true | Tbl_press_releaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_press_releaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_press_releaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_press_releaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_press_releaseMaxAggregateInputType
  }

  export type GetTbl_press_releaseAggregateType<T extends Tbl_press_releaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_press_release]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_press_release[P]>
      : GetScalarType<T[P], AggregateTbl_press_release[P]>
  }




  export type tbl_press_releaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_press_releaseWhereInput
    orderBy?: tbl_press_releaseOrderByWithAggregationInput | tbl_press_releaseOrderByWithAggregationInput[]
    by: Tbl_press_releaseScalarFieldEnum[] | Tbl_press_releaseScalarFieldEnum
    having?: tbl_press_releaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_press_releaseCountAggregateInputType | true
    _avg?: Tbl_press_releaseAvgAggregateInputType
    _sum?: Tbl_press_releaseSumAggregateInputType
    _min?: Tbl_press_releaseMinAggregateInputType
    _max?: Tbl_press_releaseMaxAggregateInputType
  }

  export type Tbl_press_releaseGroupByOutputType = {
    id: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description: string | null
    press_release_image: string | null
    short_description: string
    press_release_content: string
    status: number
    is_deleted: number
    createdAt: Date
    updatedAt: Date
    _count: Tbl_press_releaseCountAggregateOutputType | null
    _avg: Tbl_press_releaseAvgAggregateOutputType | null
    _sum: Tbl_press_releaseSumAggregateOutputType | null
    _min: Tbl_press_releaseMinAggregateOutputType | null
    _max: Tbl_press_releaseMaxAggregateOutputType | null
  }

  type GetTbl_press_releaseGroupByPayload<T extends tbl_press_releaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_press_releaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_press_releaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_press_releaseGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_press_releaseGroupByOutputType[P]>
        }
      >
    >


  export type tbl_press_releaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    meta_url?: boolean
    meta_keyword?: boolean
    author?: boolean
    tag?: boolean
    meta_description?: boolean
    press_release_image?: boolean
    short_description?: boolean
    press_release_content?: boolean
    status?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tbl_press_release"]>



  export type tbl_press_releaseSelectScalar = {
    id?: boolean
    title?: boolean
    meta_url?: boolean
    meta_keyword?: boolean
    author?: boolean
    tag?: boolean
    meta_description?: boolean
    press_release_image?: boolean
    short_description?: boolean
    press_release_content?: boolean
    status?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tbl_press_releaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "meta_url" | "meta_keyword" | "author" | "tag" | "meta_description" | "press_release_image" | "short_description" | "press_release_content" | "status" | "is_deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["tbl_press_release"]>

  export type $tbl_press_releasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_press_release"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      meta_url: string
      meta_keyword: string
      author: string
      tag: string
      meta_description: string | null
      press_release_image: string | null
      short_description: string
      press_release_content: string
      status: number
      is_deleted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tbl_press_release"]>
    composites: {}
  }

  type tbl_press_releaseGetPayload<S extends boolean | null | undefined | tbl_press_releaseDefaultArgs> = $Result.GetResult<Prisma.$tbl_press_releasePayload, S>

  type tbl_press_releaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_press_releaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_press_releaseCountAggregateInputType | true
    }

  export interface tbl_press_releaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_press_release'], meta: { name: 'tbl_press_release' } }
    /**
     * Find zero or one Tbl_press_release that matches the filter.
     * @param {tbl_press_releaseFindUniqueArgs} args - Arguments to find a Tbl_press_release
     * @example
     * // Get one Tbl_press_release
     * const tbl_press_release = await prisma.tbl_press_release.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_press_releaseFindUniqueArgs>(args: SelectSubset<T, tbl_press_releaseFindUniqueArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_press_release that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_press_releaseFindUniqueOrThrowArgs} args - Arguments to find a Tbl_press_release
     * @example
     * // Get one Tbl_press_release
     * const tbl_press_release = await prisma.tbl_press_release.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_press_releaseFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_press_releaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_press_release that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_press_releaseFindFirstArgs} args - Arguments to find a Tbl_press_release
     * @example
     * // Get one Tbl_press_release
     * const tbl_press_release = await prisma.tbl_press_release.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_press_releaseFindFirstArgs>(args?: SelectSubset<T, tbl_press_releaseFindFirstArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_press_release that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_press_releaseFindFirstOrThrowArgs} args - Arguments to find a Tbl_press_release
     * @example
     * // Get one Tbl_press_release
     * const tbl_press_release = await prisma.tbl_press_release.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_press_releaseFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_press_releaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_press_releases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_press_releaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_press_releases
     * const tbl_press_releases = await prisma.tbl_press_release.findMany()
     * 
     * // Get first 10 Tbl_press_releases
     * const tbl_press_releases = await prisma.tbl_press_release.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_press_releaseWithIdOnly = await prisma.tbl_press_release.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_press_releaseFindManyArgs>(args?: SelectSubset<T, tbl_press_releaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_press_release.
     * @param {tbl_press_releaseCreateArgs} args - Arguments to create a Tbl_press_release.
     * @example
     * // Create one Tbl_press_release
     * const Tbl_press_release = await prisma.tbl_press_release.create({
     *   data: {
     *     // ... data to create a Tbl_press_release
     *   }
     * })
     * 
     */
    create<T extends tbl_press_releaseCreateArgs>(args: SelectSubset<T, tbl_press_releaseCreateArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_press_releases.
     * @param {tbl_press_releaseCreateManyArgs} args - Arguments to create many Tbl_press_releases.
     * @example
     * // Create many Tbl_press_releases
     * const tbl_press_release = await prisma.tbl_press_release.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_press_releaseCreateManyArgs>(args?: SelectSubset<T, tbl_press_releaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_press_release.
     * @param {tbl_press_releaseDeleteArgs} args - Arguments to delete one Tbl_press_release.
     * @example
     * // Delete one Tbl_press_release
     * const Tbl_press_release = await prisma.tbl_press_release.delete({
     *   where: {
     *     // ... filter to delete one Tbl_press_release
     *   }
     * })
     * 
     */
    delete<T extends tbl_press_releaseDeleteArgs>(args: SelectSubset<T, tbl_press_releaseDeleteArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_press_release.
     * @param {tbl_press_releaseUpdateArgs} args - Arguments to update one Tbl_press_release.
     * @example
     * // Update one Tbl_press_release
     * const tbl_press_release = await prisma.tbl_press_release.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_press_releaseUpdateArgs>(args: SelectSubset<T, tbl_press_releaseUpdateArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_press_releases.
     * @param {tbl_press_releaseDeleteManyArgs} args - Arguments to filter Tbl_press_releases to delete.
     * @example
     * // Delete a few Tbl_press_releases
     * const { count } = await prisma.tbl_press_release.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_press_releaseDeleteManyArgs>(args?: SelectSubset<T, tbl_press_releaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_press_releases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_press_releaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_press_releases
     * const tbl_press_release = await prisma.tbl_press_release.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_press_releaseUpdateManyArgs>(args: SelectSubset<T, tbl_press_releaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_press_release.
     * @param {tbl_press_releaseUpsertArgs} args - Arguments to update or create a Tbl_press_release.
     * @example
     * // Update or create a Tbl_press_release
     * const tbl_press_release = await prisma.tbl_press_release.upsert({
     *   create: {
     *     // ... data to create a Tbl_press_release
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_press_release we want to update
     *   }
     * })
     */
    upsert<T extends tbl_press_releaseUpsertArgs>(args: SelectSubset<T, tbl_press_releaseUpsertArgs<ExtArgs>>): Prisma__tbl_press_releaseClient<$Result.GetResult<Prisma.$tbl_press_releasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_press_releases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_press_releaseCountArgs} args - Arguments to filter Tbl_press_releases to count.
     * @example
     * // Count the number of Tbl_press_releases
     * const count = await prisma.tbl_press_release.count({
     *   where: {
     *     // ... the filter for the Tbl_press_releases we want to count
     *   }
     * })
    **/
    count<T extends tbl_press_releaseCountArgs>(
      args?: Subset<T, tbl_press_releaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_press_releaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_press_release.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_press_releaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_press_releaseAggregateArgs>(args: Subset<T, Tbl_press_releaseAggregateArgs>): Prisma.PrismaPromise<GetTbl_press_releaseAggregateType<T>>

    /**
     * Group by Tbl_press_release.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_press_releaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_press_releaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_press_releaseGroupByArgs['orderBy'] }
        : { orderBy?: tbl_press_releaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_press_releaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_press_releaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_press_release model
   */
  readonly fields: tbl_press_releaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_press_release.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_press_releaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_press_release model
   */
  interface tbl_press_releaseFieldRefs {
    readonly id: FieldRef<"tbl_press_release", 'Int'>
    readonly title: FieldRef<"tbl_press_release", 'String'>
    readonly meta_url: FieldRef<"tbl_press_release", 'String'>
    readonly meta_keyword: FieldRef<"tbl_press_release", 'String'>
    readonly author: FieldRef<"tbl_press_release", 'String'>
    readonly tag: FieldRef<"tbl_press_release", 'String'>
    readonly meta_description: FieldRef<"tbl_press_release", 'String'>
    readonly press_release_image: FieldRef<"tbl_press_release", 'String'>
    readonly short_description: FieldRef<"tbl_press_release", 'String'>
    readonly press_release_content: FieldRef<"tbl_press_release", 'String'>
    readonly status: FieldRef<"tbl_press_release", 'Int'>
    readonly is_deleted: FieldRef<"tbl_press_release", 'Int'>
    readonly createdAt: FieldRef<"tbl_press_release", 'DateTime'>
    readonly updatedAt: FieldRef<"tbl_press_release", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_press_release findUnique
   */
  export type tbl_press_releaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * Filter, which tbl_press_release to fetch.
     */
    where: tbl_press_releaseWhereUniqueInput
  }

  /**
   * tbl_press_release findUniqueOrThrow
   */
  export type tbl_press_releaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * Filter, which tbl_press_release to fetch.
     */
    where: tbl_press_releaseWhereUniqueInput
  }

  /**
   * tbl_press_release findFirst
   */
  export type tbl_press_releaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * Filter, which tbl_press_release to fetch.
     */
    where?: tbl_press_releaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_press_releases to fetch.
     */
    orderBy?: tbl_press_releaseOrderByWithRelationInput | tbl_press_releaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_press_releases.
     */
    cursor?: tbl_press_releaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_press_releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_press_releases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_press_releases.
     */
    distinct?: Tbl_press_releaseScalarFieldEnum | Tbl_press_releaseScalarFieldEnum[]
  }

  /**
   * tbl_press_release findFirstOrThrow
   */
  export type tbl_press_releaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * Filter, which tbl_press_release to fetch.
     */
    where?: tbl_press_releaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_press_releases to fetch.
     */
    orderBy?: tbl_press_releaseOrderByWithRelationInput | tbl_press_releaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_press_releases.
     */
    cursor?: tbl_press_releaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_press_releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_press_releases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_press_releases.
     */
    distinct?: Tbl_press_releaseScalarFieldEnum | Tbl_press_releaseScalarFieldEnum[]
  }

  /**
   * tbl_press_release findMany
   */
  export type tbl_press_releaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * Filter, which tbl_press_releases to fetch.
     */
    where?: tbl_press_releaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_press_releases to fetch.
     */
    orderBy?: tbl_press_releaseOrderByWithRelationInput | tbl_press_releaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_press_releases.
     */
    cursor?: tbl_press_releaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_press_releases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_press_releases.
     */
    skip?: number
    distinct?: Tbl_press_releaseScalarFieldEnum | Tbl_press_releaseScalarFieldEnum[]
  }

  /**
   * tbl_press_release create
   */
  export type tbl_press_releaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_press_release.
     */
    data: XOR<tbl_press_releaseCreateInput, tbl_press_releaseUncheckedCreateInput>
  }

  /**
   * tbl_press_release createMany
   */
  export type tbl_press_releaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_press_releases.
     */
    data: tbl_press_releaseCreateManyInput | tbl_press_releaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_press_release update
   */
  export type tbl_press_releaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_press_release.
     */
    data: XOR<tbl_press_releaseUpdateInput, tbl_press_releaseUncheckedUpdateInput>
    /**
     * Choose, which tbl_press_release to update.
     */
    where: tbl_press_releaseWhereUniqueInput
  }

  /**
   * tbl_press_release updateMany
   */
  export type tbl_press_releaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_press_releases.
     */
    data: XOR<tbl_press_releaseUpdateManyMutationInput, tbl_press_releaseUncheckedUpdateManyInput>
    /**
     * Filter which tbl_press_releases to update
     */
    where?: tbl_press_releaseWhereInput
    /**
     * Limit how many tbl_press_releases to update.
     */
    limit?: number
  }

  /**
   * tbl_press_release upsert
   */
  export type tbl_press_releaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_press_release to update in case it exists.
     */
    where: tbl_press_releaseWhereUniqueInput
    /**
     * In case the tbl_press_release found by the `where` argument doesn't exist, create a new tbl_press_release with this data.
     */
    create: XOR<tbl_press_releaseCreateInput, tbl_press_releaseUncheckedCreateInput>
    /**
     * In case the tbl_press_release was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_press_releaseUpdateInput, tbl_press_releaseUncheckedUpdateInput>
  }

  /**
   * tbl_press_release delete
   */
  export type tbl_press_releaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
    /**
     * Filter which tbl_press_release to delete.
     */
    where: tbl_press_releaseWhereUniqueInput
  }

  /**
   * tbl_press_release deleteMany
   */
  export type tbl_press_releaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_press_releases to delete
     */
    where?: tbl_press_releaseWhereInput
    /**
     * Limit how many tbl_press_releases to delete.
     */
    limit?: number
  }

  /**
   * tbl_press_release without action
   */
  export type tbl_press_releaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_press_release
     */
    select?: tbl_press_releaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_press_release
     */
    omit?: tbl_press_releaseOmit<ExtArgs> | null
  }


  /**
   * Model tbl_faq
   */

  export type AggregateTbl_faq = {
    _count: Tbl_faqCountAggregateOutputType | null
    _avg: Tbl_faqAvgAggregateOutputType | null
    _sum: Tbl_faqSumAggregateOutputType | null
    _min: Tbl_faqMinAggregateOutputType | null
    _max: Tbl_faqMaxAggregateOutputType | null
  }

  export type Tbl_faqAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_faqSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_faqMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_faqMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_faqCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_faqAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_faqSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_faqMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_faqMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_faqCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_faqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_faq to aggregate.
     */
    where?: tbl_faqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_faqs to fetch.
     */
    orderBy?: tbl_faqOrderByWithRelationInput | tbl_faqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_faqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_faqs
    **/
    _count?: true | Tbl_faqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_faqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_faqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_faqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_faqMaxAggregateInputType
  }

  export type GetTbl_faqAggregateType<T extends Tbl_faqAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_faq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_faq[P]>
      : GetScalarType<T[P], AggregateTbl_faq[P]>
  }




  export type tbl_faqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_faqWhereInput
    orderBy?: tbl_faqOrderByWithAggregationInput | tbl_faqOrderByWithAggregationInput[]
    by: Tbl_faqScalarFieldEnum[] | Tbl_faqScalarFieldEnum
    having?: tbl_faqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_faqCountAggregateInputType | true
    _avg?: Tbl_faqAvgAggregateInputType
    _sum?: Tbl_faqSumAggregateInputType
    _min?: Tbl_faqMinAggregateInputType
    _max?: Tbl_faqMaxAggregateInputType
  }

  export type Tbl_faqGroupByOutputType = {
    id: number
    question: string
    answer: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_faqCountAggregateOutputType | null
    _avg: Tbl_faqAvgAggregateOutputType | null
    _sum: Tbl_faqSumAggregateOutputType | null
    _min: Tbl_faqMinAggregateOutputType | null
    _max: Tbl_faqMaxAggregateOutputType | null
  }

  type GetTbl_faqGroupByPayload<T extends tbl_faqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_faqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_faqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_faqGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_faqGroupByOutputType[P]>
        }
      >
    >


  export type tbl_faqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }, ExtArgs["result"]["tbl_faq"]>



  export type tbl_faqSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_faqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_faq"]>

  export type $tbl_faqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_faq"]>
    composites: {}
  }

  type tbl_faqGetPayload<S extends boolean | null | undefined | tbl_faqDefaultArgs> = $Result.GetResult<Prisma.$tbl_faqPayload, S>

  type tbl_faqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_faqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_faqCountAggregateInputType | true
    }

  export interface tbl_faqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_faq'], meta: { name: 'tbl_faq' } }
    /**
     * Find zero or one Tbl_faq that matches the filter.
     * @param {tbl_faqFindUniqueArgs} args - Arguments to find a Tbl_faq
     * @example
     * // Get one Tbl_faq
     * const tbl_faq = await prisma.tbl_faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_faqFindUniqueArgs>(args: SelectSubset<T, tbl_faqFindUniqueArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_faqFindUniqueOrThrowArgs} args - Arguments to find a Tbl_faq
     * @example
     * // Get one Tbl_faq
     * const tbl_faq = await prisma.tbl_faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_faqFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_faqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_faqFindFirstArgs} args - Arguments to find a Tbl_faq
     * @example
     * // Get one Tbl_faq
     * const tbl_faq = await prisma.tbl_faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_faqFindFirstArgs>(args?: SelectSubset<T, tbl_faqFindFirstArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_faqFindFirstOrThrowArgs} args - Arguments to find a Tbl_faq
     * @example
     * // Get one Tbl_faq
     * const tbl_faq = await prisma.tbl_faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_faqFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_faqFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_faqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_faqs
     * const tbl_faqs = await prisma.tbl_faq.findMany()
     * 
     * // Get first 10 Tbl_faqs
     * const tbl_faqs = await prisma.tbl_faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_faqWithIdOnly = await prisma.tbl_faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_faqFindManyArgs>(args?: SelectSubset<T, tbl_faqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_faq.
     * @param {tbl_faqCreateArgs} args - Arguments to create a Tbl_faq.
     * @example
     * // Create one Tbl_faq
     * const Tbl_faq = await prisma.tbl_faq.create({
     *   data: {
     *     // ... data to create a Tbl_faq
     *   }
     * })
     * 
     */
    create<T extends tbl_faqCreateArgs>(args: SelectSubset<T, tbl_faqCreateArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_faqs.
     * @param {tbl_faqCreateManyArgs} args - Arguments to create many Tbl_faqs.
     * @example
     * // Create many Tbl_faqs
     * const tbl_faq = await prisma.tbl_faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_faqCreateManyArgs>(args?: SelectSubset<T, tbl_faqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_faq.
     * @param {tbl_faqDeleteArgs} args - Arguments to delete one Tbl_faq.
     * @example
     * // Delete one Tbl_faq
     * const Tbl_faq = await prisma.tbl_faq.delete({
     *   where: {
     *     // ... filter to delete one Tbl_faq
     *   }
     * })
     * 
     */
    delete<T extends tbl_faqDeleteArgs>(args: SelectSubset<T, tbl_faqDeleteArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_faq.
     * @param {tbl_faqUpdateArgs} args - Arguments to update one Tbl_faq.
     * @example
     * // Update one Tbl_faq
     * const tbl_faq = await prisma.tbl_faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_faqUpdateArgs>(args: SelectSubset<T, tbl_faqUpdateArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_faqs.
     * @param {tbl_faqDeleteManyArgs} args - Arguments to filter Tbl_faqs to delete.
     * @example
     * // Delete a few Tbl_faqs
     * const { count } = await prisma.tbl_faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_faqDeleteManyArgs>(args?: SelectSubset<T, tbl_faqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_faqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_faqs
     * const tbl_faq = await prisma.tbl_faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_faqUpdateManyArgs>(args: SelectSubset<T, tbl_faqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_faq.
     * @param {tbl_faqUpsertArgs} args - Arguments to update or create a Tbl_faq.
     * @example
     * // Update or create a Tbl_faq
     * const tbl_faq = await prisma.tbl_faq.upsert({
     *   create: {
     *     // ... data to create a Tbl_faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_faq we want to update
     *   }
     * })
     */
    upsert<T extends tbl_faqUpsertArgs>(args: SelectSubset<T, tbl_faqUpsertArgs<ExtArgs>>): Prisma__tbl_faqClient<$Result.GetResult<Prisma.$tbl_faqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_faqCountArgs} args - Arguments to filter Tbl_faqs to count.
     * @example
     * // Count the number of Tbl_faqs
     * const count = await prisma.tbl_faq.count({
     *   where: {
     *     // ... the filter for the Tbl_faqs we want to count
     *   }
     * })
    **/
    count<T extends tbl_faqCountArgs>(
      args?: Subset<T, tbl_faqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_faqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_faqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_faqAggregateArgs>(args: Subset<T, Tbl_faqAggregateArgs>): Prisma.PrismaPromise<GetTbl_faqAggregateType<T>>

    /**
     * Group by Tbl_faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_faqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_faqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_faqGroupByArgs['orderBy'] }
        : { orderBy?: tbl_faqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_faqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_faqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_faq model
   */
  readonly fields: tbl_faqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_faqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_faq model
   */
  interface tbl_faqFieldRefs {
    readonly id: FieldRef<"tbl_faq", 'Int'>
    readonly question: FieldRef<"tbl_faq", 'String'>
    readonly answer: FieldRef<"tbl_faq", 'String'>
    readonly status: FieldRef<"tbl_faq", 'Int'>
    readonly is_deleted: FieldRef<"tbl_faq", 'Int'>
    readonly created_on: FieldRef<"tbl_faq", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_faq findUnique
   */
  export type tbl_faqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * Filter, which tbl_faq to fetch.
     */
    where: tbl_faqWhereUniqueInput
  }

  /**
   * tbl_faq findUniqueOrThrow
   */
  export type tbl_faqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * Filter, which tbl_faq to fetch.
     */
    where: tbl_faqWhereUniqueInput
  }

  /**
   * tbl_faq findFirst
   */
  export type tbl_faqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * Filter, which tbl_faq to fetch.
     */
    where?: tbl_faqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_faqs to fetch.
     */
    orderBy?: tbl_faqOrderByWithRelationInput | tbl_faqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_faqs.
     */
    cursor?: tbl_faqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_faqs.
     */
    distinct?: Tbl_faqScalarFieldEnum | Tbl_faqScalarFieldEnum[]
  }

  /**
   * tbl_faq findFirstOrThrow
   */
  export type tbl_faqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * Filter, which tbl_faq to fetch.
     */
    where?: tbl_faqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_faqs to fetch.
     */
    orderBy?: tbl_faqOrderByWithRelationInput | tbl_faqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_faqs.
     */
    cursor?: tbl_faqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_faqs.
     */
    distinct?: Tbl_faqScalarFieldEnum | Tbl_faqScalarFieldEnum[]
  }

  /**
   * tbl_faq findMany
   */
  export type tbl_faqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * Filter, which tbl_faqs to fetch.
     */
    where?: tbl_faqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_faqs to fetch.
     */
    orderBy?: tbl_faqOrderByWithRelationInput | tbl_faqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_faqs.
     */
    cursor?: tbl_faqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_faqs.
     */
    skip?: number
    distinct?: Tbl_faqScalarFieldEnum | Tbl_faqScalarFieldEnum[]
  }

  /**
   * tbl_faq create
   */
  export type tbl_faqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_faq.
     */
    data: XOR<tbl_faqCreateInput, tbl_faqUncheckedCreateInput>
  }

  /**
   * tbl_faq createMany
   */
  export type tbl_faqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_faqs.
     */
    data: tbl_faqCreateManyInput | tbl_faqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_faq update
   */
  export type tbl_faqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_faq.
     */
    data: XOR<tbl_faqUpdateInput, tbl_faqUncheckedUpdateInput>
    /**
     * Choose, which tbl_faq to update.
     */
    where: tbl_faqWhereUniqueInput
  }

  /**
   * tbl_faq updateMany
   */
  export type tbl_faqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_faqs.
     */
    data: XOR<tbl_faqUpdateManyMutationInput, tbl_faqUncheckedUpdateManyInput>
    /**
     * Filter which tbl_faqs to update
     */
    where?: tbl_faqWhereInput
    /**
     * Limit how many tbl_faqs to update.
     */
    limit?: number
  }

  /**
   * tbl_faq upsert
   */
  export type tbl_faqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_faq to update in case it exists.
     */
    where: tbl_faqWhereUniqueInput
    /**
     * In case the tbl_faq found by the `where` argument doesn't exist, create a new tbl_faq with this data.
     */
    create: XOR<tbl_faqCreateInput, tbl_faqUncheckedCreateInput>
    /**
     * In case the tbl_faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_faqUpdateInput, tbl_faqUncheckedUpdateInput>
  }

  /**
   * tbl_faq delete
   */
  export type tbl_faqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
    /**
     * Filter which tbl_faq to delete.
     */
    where: tbl_faqWhereUniqueInput
  }

  /**
   * tbl_faq deleteMany
   */
  export type tbl_faqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_faqs to delete
     */
    where?: tbl_faqWhereInput
    /**
     * Limit how many tbl_faqs to delete.
     */
    limit?: number
  }

  /**
   * tbl_faq without action
   */
  export type tbl_faqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_faq
     */
    select?: tbl_faqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_faq
     */
    omit?: tbl_faqOmit<ExtArgs> | null
  }


  /**
   * Model tbl_contact_us
   */

  export type AggregateTbl_contact_us = {
    _count: Tbl_contact_usCountAggregateOutputType | null
    _avg: Tbl_contact_usAvgAggregateOutputType | null
    _sum: Tbl_contact_usSumAggregateOutputType | null
    _min: Tbl_contact_usMinAggregateOutputType | null
    _max: Tbl_contact_usMaxAggregateOutputType | null
  }

  export type Tbl_contact_usAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_contact_usSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_contact_usMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_contact_usMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_contact_usCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_contact_usAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_contact_usSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_contact_usMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_contact_usMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_contact_usCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_contact_usAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_contact_us to aggregate.
     */
    where?: tbl_contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_contact_uses to fetch.
     */
    orderBy?: tbl_contact_usOrderByWithRelationInput | tbl_contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_contact_uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_contact_uses
    **/
    _count?: true | Tbl_contact_usCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_contact_usAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_contact_usSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_contact_usMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_contact_usMaxAggregateInputType
  }

  export type GetTbl_contact_usAggregateType<T extends Tbl_contact_usAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_contact_us]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_contact_us[P]>
      : GetScalarType<T[P], AggregateTbl_contact_us[P]>
  }




  export type tbl_contact_usGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_contact_usWhereInput
    orderBy?: tbl_contact_usOrderByWithAggregationInput | tbl_contact_usOrderByWithAggregationInput[]
    by: Tbl_contact_usScalarFieldEnum[] | Tbl_contact_usScalarFieldEnum
    having?: tbl_contact_usScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_contact_usCountAggregateInputType | true
    _avg?: Tbl_contact_usAvgAggregateInputType
    _sum?: Tbl_contact_usSumAggregateInputType
    _min?: Tbl_contact_usMinAggregateInputType
    _max?: Tbl_contact_usMaxAggregateInputType
  }

  export type Tbl_contact_usGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    message: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_contact_usCountAggregateOutputType | null
    _avg: Tbl_contact_usAvgAggregateOutputType | null
    _sum: Tbl_contact_usSumAggregateOutputType | null
    _min: Tbl_contact_usMinAggregateOutputType | null
    _max: Tbl_contact_usMaxAggregateOutputType | null
  }

  type GetTbl_contact_usGroupByPayload<T extends tbl_contact_usGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_contact_usGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_contact_usGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_contact_usGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_contact_usGroupByOutputType[P]>
        }
      >
    >


  export type tbl_contact_usSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }, ExtArgs["result"]["tbl_contact_us"]>



  export type tbl_contact_usSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_contact_usOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_contact_us"]>

  export type $tbl_contact_usPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_contact_us"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      message: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_contact_us"]>
    composites: {}
  }

  type tbl_contact_usGetPayload<S extends boolean | null | undefined | tbl_contact_usDefaultArgs> = $Result.GetResult<Prisma.$tbl_contact_usPayload, S>

  type tbl_contact_usCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_contact_usFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_contact_usCountAggregateInputType | true
    }

  export interface tbl_contact_usDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_contact_us'], meta: { name: 'tbl_contact_us' } }
    /**
     * Find zero or one Tbl_contact_us that matches the filter.
     * @param {tbl_contact_usFindUniqueArgs} args - Arguments to find a Tbl_contact_us
     * @example
     * // Get one Tbl_contact_us
     * const tbl_contact_us = await prisma.tbl_contact_us.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_contact_usFindUniqueArgs>(args: SelectSubset<T, tbl_contact_usFindUniqueArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_contact_us that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_contact_usFindUniqueOrThrowArgs} args - Arguments to find a Tbl_contact_us
     * @example
     * // Get one Tbl_contact_us
     * const tbl_contact_us = await prisma.tbl_contact_us.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_contact_usFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_contact_usFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_contact_us that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_contact_usFindFirstArgs} args - Arguments to find a Tbl_contact_us
     * @example
     * // Get one Tbl_contact_us
     * const tbl_contact_us = await prisma.tbl_contact_us.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_contact_usFindFirstArgs>(args?: SelectSubset<T, tbl_contact_usFindFirstArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_contact_us that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_contact_usFindFirstOrThrowArgs} args - Arguments to find a Tbl_contact_us
     * @example
     * // Get one Tbl_contact_us
     * const tbl_contact_us = await prisma.tbl_contact_us.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_contact_usFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_contact_usFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_contact_uses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_contact_usFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_contact_uses
     * const tbl_contact_uses = await prisma.tbl_contact_us.findMany()
     * 
     * // Get first 10 Tbl_contact_uses
     * const tbl_contact_uses = await prisma.tbl_contact_us.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_contact_usWithIdOnly = await prisma.tbl_contact_us.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_contact_usFindManyArgs>(args?: SelectSubset<T, tbl_contact_usFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_contact_us.
     * @param {tbl_contact_usCreateArgs} args - Arguments to create a Tbl_contact_us.
     * @example
     * // Create one Tbl_contact_us
     * const Tbl_contact_us = await prisma.tbl_contact_us.create({
     *   data: {
     *     // ... data to create a Tbl_contact_us
     *   }
     * })
     * 
     */
    create<T extends tbl_contact_usCreateArgs>(args: SelectSubset<T, tbl_contact_usCreateArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_contact_uses.
     * @param {tbl_contact_usCreateManyArgs} args - Arguments to create many Tbl_contact_uses.
     * @example
     * // Create many Tbl_contact_uses
     * const tbl_contact_us = await prisma.tbl_contact_us.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_contact_usCreateManyArgs>(args?: SelectSubset<T, tbl_contact_usCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_contact_us.
     * @param {tbl_contact_usDeleteArgs} args - Arguments to delete one Tbl_contact_us.
     * @example
     * // Delete one Tbl_contact_us
     * const Tbl_contact_us = await prisma.tbl_contact_us.delete({
     *   where: {
     *     // ... filter to delete one Tbl_contact_us
     *   }
     * })
     * 
     */
    delete<T extends tbl_contact_usDeleteArgs>(args: SelectSubset<T, tbl_contact_usDeleteArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_contact_us.
     * @param {tbl_contact_usUpdateArgs} args - Arguments to update one Tbl_contact_us.
     * @example
     * // Update one Tbl_contact_us
     * const tbl_contact_us = await prisma.tbl_contact_us.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_contact_usUpdateArgs>(args: SelectSubset<T, tbl_contact_usUpdateArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_contact_uses.
     * @param {tbl_contact_usDeleteManyArgs} args - Arguments to filter Tbl_contact_uses to delete.
     * @example
     * // Delete a few Tbl_contact_uses
     * const { count } = await prisma.tbl_contact_us.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_contact_usDeleteManyArgs>(args?: SelectSubset<T, tbl_contact_usDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_contact_uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_contact_usUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_contact_uses
     * const tbl_contact_us = await prisma.tbl_contact_us.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_contact_usUpdateManyArgs>(args: SelectSubset<T, tbl_contact_usUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_contact_us.
     * @param {tbl_contact_usUpsertArgs} args - Arguments to update or create a Tbl_contact_us.
     * @example
     * // Update or create a Tbl_contact_us
     * const tbl_contact_us = await prisma.tbl_contact_us.upsert({
     *   create: {
     *     // ... data to create a Tbl_contact_us
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_contact_us we want to update
     *   }
     * })
     */
    upsert<T extends tbl_contact_usUpsertArgs>(args: SelectSubset<T, tbl_contact_usUpsertArgs<ExtArgs>>): Prisma__tbl_contact_usClient<$Result.GetResult<Prisma.$tbl_contact_usPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_contact_uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_contact_usCountArgs} args - Arguments to filter Tbl_contact_uses to count.
     * @example
     * // Count the number of Tbl_contact_uses
     * const count = await prisma.tbl_contact_us.count({
     *   where: {
     *     // ... the filter for the Tbl_contact_uses we want to count
     *   }
     * })
    **/
    count<T extends tbl_contact_usCountArgs>(
      args?: Subset<T, tbl_contact_usCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_contact_usCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_contact_us.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_contact_usAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_contact_usAggregateArgs>(args: Subset<T, Tbl_contact_usAggregateArgs>): Prisma.PrismaPromise<GetTbl_contact_usAggregateType<T>>

    /**
     * Group by Tbl_contact_us.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_contact_usGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_contact_usGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_contact_usGroupByArgs['orderBy'] }
        : { orderBy?: tbl_contact_usGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_contact_usGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_contact_usGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_contact_us model
   */
  readonly fields: tbl_contact_usFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_contact_us.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_contact_usClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_contact_us model
   */
  interface tbl_contact_usFieldRefs {
    readonly id: FieldRef<"tbl_contact_us", 'Int'>
    readonly name: FieldRef<"tbl_contact_us", 'String'>
    readonly email: FieldRef<"tbl_contact_us", 'String'>
    readonly phone: FieldRef<"tbl_contact_us", 'String'>
    readonly message: FieldRef<"tbl_contact_us", 'String'>
    readonly status: FieldRef<"tbl_contact_us", 'Int'>
    readonly is_deleted: FieldRef<"tbl_contact_us", 'Int'>
    readonly created_on: FieldRef<"tbl_contact_us", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_contact_us", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_contact_us findUnique
   */
  export type tbl_contact_usFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * Filter, which tbl_contact_us to fetch.
     */
    where: tbl_contact_usWhereUniqueInput
  }

  /**
   * tbl_contact_us findUniqueOrThrow
   */
  export type tbl_contact_usFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * Filter, which tbl_contact_us to fetch.
     */
    where: tbl_contact_usWhereUniqueInput
  }

  /**
   * tbl_contact_us findFirst
   */
  export type tbl_contact_usFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * Filter, which tbl_contact_us to fetch.
     */
    where?: tbl_contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_contact_uses to fetch.
     */
    orderBy?: tbl_contact_usOrderByWithRelationInput | tbl_contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_contact_uses.
     */
    cursor?: tbl_contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_contact_uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_contact_uses.
     */
    distinct?: Tbl_contact_usScalarFieldEnum | Tbl_contact_usScalarFieldEnum[]
  }

  /**
   * tbl_contact_us findFirstOrThrow
   */
  export type tbl_contact_usFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * Filter, which tbl_contact_us to fetch.
     */
    where?: tbl_contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_contact_uses to fetch.
     */
    orderBy?: tbl_contact_usOrderByWithRelationInput | tbl_contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_contact_uses.
     */
    cursor?: tbl_contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_contact_uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_contact_uses.
     */
    distinct?: Tbl_contact_usScalarFieldEnum | Tbl_contact_usScalarFieldEnum[]
  }

  /**
   * tbl_contact_us findMany
   */
  export type tbl_contact_usFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * Filter, which tbl_contact_uses to fetch.
     */
    where?: tbl_contact_usWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_contact_uses to fetch.
     */
    orderBy?: tbl_contact_usOrderByWithRelationInput | tbl_contact_usOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_contact_uses.
     */
    cursor?: tbl_contact_usWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_contact_uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_contact_uses.
     */
    skip?: number
    distinct?: Tbl_contact_usScalarFieldEnum | Tbl_contact_usScalarFieldEnum[]
  }

  /**
   * tbl_contact_us create
   */
  export type tbl_contact_usCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_contact_us.
     */
    data: XOR<tbl_contact_usCreateInput, tbl_contact_usUncheckedCreateInput>
  }

  /**
   * tbl_contact_us createMany
   */
  export type tbl_contact_usCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_contact_uses.
     */
    data: tbl_contact_usCreateManyInput | tbl_contact_usCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_contact_us update
   */
  export type tbl_contact_usUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_contact_us.
     */
    data: XOR<tbl_contact_usUpdateInput, tbl_contact_usUncheckedUpdateInput>
    /**
     * Choose, which tbl_contact_us to update.
     */
    where: tbl_contact_usWhereUniqueInput
  }

  /**
   * tbl_contact_us updateMany
   */
  export type tbl_contact_usUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_contact_uses.
     */
    data: XOR<tbl_contact_usUpdateManyMutationInput, tbl_contact_usUncheckedUpdateManyInput>
    /**
     * Filter which tbl_contact_uses to update
     */
    where?: tbl_contact_usWhereInput
    /**
     * Limit how many tbl_contact_uses to update.
     */
    limit?: number
  }

  /**
   * tbl_contact_us upsert
   */
  export type tbl_contact_usUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_contact_us to update in case it exists.
     */
    where: tbl_contact_usWhereUniqueInput
    /**
     * In case the tbl_contact_us found by the `where` argument doesn't exist, create a new tbl_contact_us with this data.
     */
    create: XOR<tbl_contact_usCreateInput, tbl_contact_usUncheckedCreateInput>
    /**
     * In case the tbl_contact_us was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_contact_usUpdateInput, tbl_contact_usUncheckedUpdateInput>
  }

  /**
   * tbl_contact_us delete
   */
  export type tbl_contact_usDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
    /**
     * Filter which tbl_contact_us to delete.
     */
    where: tbl_contact_usWhereUniqueInput
  }

  /**
   * tbl_contact_us deleteMany
   */
  export type tbl_contact_usDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_contact_uses to delete
     */
    where?: tbl_contact_usWhereInput
    /**
     * Limit how many tbl_contact_uses to delete.
     */
    limit?: number
  }

  /**
   * tbl_contact_us without action
   */
  export type tbl_contact_usDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_contact_us
     */
    select?: tbl_contact_usSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_contact_us
     */
    omit?: tbl_contact_usOmit<ExtArgs> | null
  }


  /**
   * Model tbl_our_team
   */

  export type AggregateTbl_our_team = {
    _count: Tbl_our_teamCountAggregateOutputType | null
    _avg: Tbl_our_teamAvgAggregateOutputType | null
    _sum: Tbl_our_teamSumAggregateOutputType | null
    _min: Tbl_our_teamMinAggregateOutputType | null
    _max: Tbl_our_teamMaxAggregateOutputType | null
  }

  export type Tbl_our_teamAvgAggregateOutputType = {
    id: number | null
    designation_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_our_teamSumAggregateOutputType = {
    id: number | null
    designation_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_our_teamMinAggregateOutputType = {
    id: number | null
    name: string | null
    designation_id: number | null
    our_team_image: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_our_teamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    designation_id: number | null
    our_team_image: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_our_teamCountAggregateOutputType = {
    id: number
    name: number
    designation_id: number
    our_team_image: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_our_teamAvgAggregateInputType = {
    id?: true
    designation_id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_our_teamSumAggregateInputType = {
    id?: true
    designation_id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_our_teamMinAggregateInputType = {
    id?: true
    name?: true
    designation_id?: true
    our_team_image?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_our_teamMaxAggregateInputType = {
    id?: true
    name?: true
    designation_id?: true
    our_team_image?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_our_teamCountAggregateInputType = {
    id?: true
    name?: true
    designation_id?: true
    our_team_image?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_our_teamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_our_team to aggregate.
     */
    where?: tbl_our_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_our_teams to fetch.
     */
    orderBy?: tbl_our_teamOrderByWithRelationInput | tbl_our_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_our_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_our_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_our_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_our_teams
    **/
    _count?: true | Tbl_our_teamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_our_teamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_our_teamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_our_teamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_our_teamMaxAggregateInputType
  }

  export type GetTbl_our_teamAggregateType<T extends Tbl_our_teamAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_our_team]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_our_team[P]>
      : GetScalarType<T[P], AggregateTbl_our_team[P]>
  }




  export type tbl_our_teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_our_teamWhereInput
    orderBy?: tbl_our_teamOrderByWithAggregationInput | tbl_our_teamOrderByWithAggregationInput[]
    by: Tbl_our_teamScalarFieldEnum[] | Tbl_our_teamScalarFieldEnum
    having?: tbl_our_teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_our_teamCountAggregateInputType | true
    _avg?: Tbl_our_teamAvgAggregateInputType
    _sum?: Tbl_our_teamSumAggregateInputType
    _min?: Tbl_our_teamMinAggregateInputType
    _max?: Tbl_our_teamMaxAggregateInputType
  }

  export type Tbl_our_teamGroupByOutputType = {
    id: number
    name: string
    designation_id: number | null
    our_team_image: string | null
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_our_teamCountAggregateOutputType | null
    _avg: Tbl_our_teamAvgAggregateOutputType | null
    _sum: Tbl_our_teamSumAggregateOutputType | null
    _min: Tbl_our_teamMinAggregateOutputType | null
    _max: Tbl_our_teamMaxAggregateOutputType | null
  }

  type GetTbl_our_teamGroupByPayload<T extends tbl_our_teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_our_teamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_our_teamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_our_teamGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_our_teamGroupByOutputType[P]>
        }
      >
    >


  export type tbl_our_teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation_id?: boolean
    our_team_image?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
    designation?: boolean | tbl_our_team$designationArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_our_team"]>



  export type tbl_our_teamSelectScalar = {
    id?: boolean
    name?: boolean
    designation_id?: boolean
    our_team_image?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_our_teamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "designation_id" | "our_team_image" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_our_team"]>
  export type tbl_our_teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    designation?: boolean | tbl_our_team$designationArgs<ExtArgs>
  }

  export type $tbl_our_teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_our_team"
    objects: {
      designation: Prisma.$tbl_designation_masterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      designation_id: number | null
      our_team_image: string | null
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_our_team"]>
    composites: {}
  }

  type tbl_our_teamGetPayload<S extends boolean | null | undefined | tbl_our_teamDefaultArgs> = $Result.GetResult<Prisma.$tbl_our_teamPayload, S>

  type tbl_our_teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_our_teamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_our_teamCountAggregateInputType | true
    }

  export interface tbl_our_teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_our_team'], meta: { name: 'tbl_our_team' } }
    /**
     * Find zero or one Tbl_our_team that matches the filter.
     * @param {tbl_our_teamFindUniqueArgs} args - Arguments to find a Tbl_our_team
     * @example
     * // Get one Tbl_our_team
     * const tbl_our_team = await prisma.tbl_our_team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_our_teamFindUniqueArgs>(args: SelectSubset<T, tbl_our_teamFindUniqueArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_our_team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_our_teamFindUniqueOrThrowArgs} args - Arguments to find a Tbl_our_team
     * @example
     * // Get one Tbl_our_team
     * const tbl_our_team = await prisma.tbl_our_team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_our_teamFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_our_teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_our_team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_our_teamFindFirstArgs} args - Arguments to find a Tbl_our_team
     * @example
     * // Get one Tbl_our_team
     * const tbl_our_team = await prisma.tbl_our_team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_our_teamFindFirstArgs>(args?: SelectSubset<T, tbl_our_teamFindFirstArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_our_team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_our_teamFindFirstOrThrowArgs} args - Arguments to find a Tbl_our_team
     * @example
     * // Get one Tbl_our_team
     * const tbl_our_team = await prisma.tbl_our_team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_our_teamFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_our_teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_our_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_our_teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_our_teams
     * const tbl_our_teams = await prisma.tbl_our_team.findMany()
     * 
     * // Get first 10 Tbl_our_teams
     * const tbl_our_teams = await prisma.tbl_our_team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_our_teamWithIdOnly = await prisma.tbl_our_team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_our_teamFindManyArgs>(args?: SelectSubset<T, tbl_our_teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_our_team.
     * @param {tbl_our_teamCreateArgs} args - Arguments to create a Tbl_our_team.
     * @example
     * // Create one Tbl_our_team
     * const Tbl_our_team = await prisma.tbl_our_team.create({
     *   data: {
     *     // ... data to create a Tbl_our_team
     *   }
     * })
     * 
     */
    create<T extends tbl_our_teamCreateArgs>(args: SelectSubset<T, tbl_our_teamCreateArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_our_teams.
     * @param {tbl_our_teamCreateManyArgs} args - Arguments to create many Tbl_our_teams.
     * @example
     * // Create many Tbl_our_teams
     * const tbl_our_team = await prisma.tbl_our_team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_our_teamCreateManyArgs>(args?: SelectSubset<T, tbl_our_teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_our_team.
     * @param {tbl_our_teamDeleteArgs} args - Arguments to delete one Tbl_our_team.
     * @example
     * // Delete one Tbl_our_team
     * const Tbl_our_team = await prisma.tbl_our_team.delete({
     *   where: {
     *     // ... filter to delete one Tbl_our_team
     *   }
     * })
     * 
     */
    delete<T extends tbl_our_teamDeleteArgs>(args: SelectSubset<T, tbl_our_teamDeleteArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_our_team.
     * @param {tbl_our_teamUpdateArgs} args - Arguments to update one Tbl_our_team.
     * @example
     * // Update one Tbl_our_team
     * const tbl_our_team = await prisma.tbl_our_team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_our_teamUpdateArgs>(args: SelectSubset<T, tbl_our_teamUpdateArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_our_teams.
     * @param {tbl_our_teamDeleteManyArgs} args - Arguments to filter Tbl_our_teams to delete.
     * @example
     * // Delete a few Tbl_our_teams
     * const { count } = await prisma.tbl_our_team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_our_teamDeleteManyArgs>(args?: SelectSubset<T, tbl_our_teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_our_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_our_teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_our_teams
     * const tbl_our_team = await prisma.tbl_our_team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_our_teamUpdateManyArgs>(args: SelectSubset<T, tbl_our_teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_our_team.
     * @param {tbl_our_teamUpsertArgs} args - Arguments to update or create a Tbl_our_team.
     * @example
     * // Update or create a Tbl_our_team
     * const tbl_our_team = await prisma.tbl_our_team.upsert({
     *   create: {
     *     // ... data to create a Tbl_our_team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_our_team we want to update
     *   }
     * })
     */
    upsert<T extends tbl_our_teamUpsertArgs>(args: SelectSubset<T, tbl_our_teamUpsertArgs<ExtArgs>>): Prisma__tbl_our_teamClient<$Result.GetResult<Prisma.$tbl_our_teamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_our_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_our_teamCountArgs} args - Arguments to filter Tbl_our_teams to count.
     * @example
     * // Count the number of Tbl_our_teams
     * const count = await prisma.tbl_our_team.count({
     *   where: {
     *     // ... the filter for the Tbl_our_teams we want to count
     *   }
     * })
    **/
    count<T extends tbl_our_teamCountArgs>(
      args?: Subset<T, tbl_our_teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_our_teamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_our_team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_our_teamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_our_teamAggregateArgs>(args: Subset<T, Tbl_our_teamAggregateArgs>): Prisma.PrismaPromise<GetTbl_our_teamAggregateType<T>>

    /**
     * Group by Tbl_our_team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_our_teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_our_teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_our_teamGroupByArgs['orderBy'] }
        : { orderBy?: tbl_our_teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_our_teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_our_teamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_our_team model
   */
  readonly fields: tbl_our_teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_our_team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_our_teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    designation<T extends tbl_our_team$designationArgs<ExtArgs> = {}>(args?: Subset<T, tbl_our_team$designationArgs<ExtArgs>>): Prisma__tbl_designation_masterClient<$Result.GetResult<Prisma.$tbl_designation_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_our_team model
   */
  interface tbl_our_teamFieldRefs {
    readonly id: FieldRef<"tbl_our_team", 'Int'>
    readonly name: FieldRef<"tbl_our_team", 'String'>
    readonly designation_id: FieldRef<"tbl_our_team", 'Int'>
    readonly our_team_image: FieldRef<"tbl_our_team", 'String'>
    readonly status: FieldRef<"tbl_our_team", 'Int'>
    readonly is_deleted: FieldRef<"tbl_our_team", 'Int'>
    readonly created_on: FieldRef<"tbl_our_team", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_our_team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_our_team findUnique
   */
  export type tbl_our_teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * Filter, which tbl_our_team to fetch.
     */
    where: tbl_our_teamWhereUniqueInput
  }

  /**
   * tbl_our_team findUniqueOrThrow
   */
  export type tbl_our_teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * Filter, which tbl_our_team to fetch.
     */
    where: tbl_our_teamWhereUniqueInput
  }

  /**
   * tbl_our_team findFirst
   */
  export type tbl_our_teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * Filter, which tbl_our_team to fetch.
     */
    where?: tbl_our_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_our_teams to fetch.
     */
    orderBy?: tbl_our_teamOrderByWithRelationInput | tbl_our_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_our_teams.
     */
    cursor?: tbl_our_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_our_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_our_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_our_teams.
     */
    distinct?: Tbl_our_teamScalarFieldEnum | Tbl_our_teamScalarFieldEnum[]
  }

  /**
   * tbl_our_team findFirstOrThrow
   */
  export type tbl_our_teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * Filter, which tbl_our_team to fetch.
     */
    where?: tbl_our_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_our_teams to fetch.
     */
    orderBy?: tbl_our_teamOrderByWithRelationInput | tbl_our_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_our_teams.
     */
    cursor?: tbl_our_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_our_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_our_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_our_teams.
     */
    distinct?: Tbl_our_teamScalarFieldEnum | Tbl_our_teamScalarFieldEnum[]
  }

  /**
   * tbl_our_team findMany
   */
  export type tbl_our_teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * Filter, which tbl_our_teams to fetch.
     */
    where?: tbl_our_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_our_teams to fetch.
     */
    orderBy?: tbl_our_teamOrderByWithRelationInput | tbl_our_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_our_teams.
     */
    cursor?: tbl_our_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_our_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_our_teams.
     */
    skip?: number
    distinct?: Tbl_our_teamScalarFieldEnum | Tbl_our_teamScalarFieldEnum[]
  }

  /**
   * tbl_our_team create
   */
  export type tbl_our_teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_our_team.
     */
    data: XOR<tbl_our_teamCreateInput, tbl_our_teamUncheckedCreateInput>
  }

  /**
   * tbl_our_team createMany
   */
  export type tbl_our_teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_our_teams.
     */
    data: tbl_our_teamCreateManyInput | tbl_our_teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_our_team update
   */
  export type tbl_our_teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_our_team.
     */
    data: XOR<tbl_our_teamUpdateInput, tbl_our_teamUncheckedUpdateInput>
    /**
     * Choose, which tbl_our_team to update.
     */
    where: tbl_our_teamWhereUniqueInput
  }

  /**
   * tbl_our_team updateMany
   */
  export type tbl_our_teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_our_teams.
     */
    data: XOR<tbl_our_teamUpdateManyMutationInput, tbl_our_teamUncheckedUpdateManyInput>
    /**
     * Filter which tbl_our_teams to update
     */
    where?: tbl_our_teamWhereInput
    /**
     * Limit how many tbl_our_teams to update.
     */
    limit?: number
  }

  /**
   * tbl_our_team upsert
   */
  export type tbl_our_teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_our_team to update in case it exists.
     */
    where: tbl_our_teamWhereUniqueInput
    /**
     * In case the tbl_our_team found by the `where` argument doesn't exist, create a new tbl_our_team with this data.
     */
    create: XOR<tbl_our_teamCreateInput, tbl_our_teamUncheckedCreateInput>
    /**
     * In case the tbl_our_team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_our_teamUpdateInput, tbl_our_teamUncheckedUpdateInput>
  }

  /**
   * tbl_our_team delete
   */
  export type tbl_our_teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
    /**
     * Filter which tbl_our_team to delete.
     */
    where: tbl_our_teamWhereUniqueInput
  }

  /**
   * tbl_our_team deleteMany
   */
  export type tbl_our_teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_our_teams to delete
     */
    where?: tbl_our_teamWhereInput
    /**
     * Limit how many tbl_our_teams to delete.
     */
    limit?: number
  }

  /**
   * tbl_our_team.designation
   */
  export type tbl_our_team$designationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_designation_master
     */
    select?: tbl_designation_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_designation_master
     */
    omit?: tbl_designation_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_designation_masterInclude<ExtArgs> | null
    where?: tbl_designation_masterWhereInput
  }

  /**
   * tbl_our_team without action
   */
  export type tbl_our_teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_our_team
     */
    select?: tbl_our_teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_our_team
     */
    omit?: tbl_our_teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_our_teamInclude<ExtArgs> | null
  }


  /**
   * Model tbl_success_story
   */

  export type AggregateTbl_success_story = {
    _count: Tbl_success_storyCountAggregateOutputType | null
    _avg: Tbl_success_storyAvgAggregateOutputType | null
    _sum: Tbl_success_storySumAggregateOutputType | null
    _min: Tbl_success_storyMinAggregateOutputType | null
    _max: Tbl_success_storyMaxAggregateOutputType | null
  }

  export type Tbl_success_storyAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_success_storySumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_success_storyMinAggregateOutputType = {
    id: number | null
    name: string | null
    organization: string | null
    sucess_story_image: string | null
    content: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_success_storyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    organization: string | null
    sucess_story_image: string | null
    content: string | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_success_storyCountAggregateOutputType = {
    id: number
    name: number
    organization: number
    sucess_story_image: number
    content: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_success_storyAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_success_storySumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_success_storyMinAggregateInputType = {
    id?: true
    name?: true
    organization?: true
    sucess_story_image?: true
    content?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_success_storyMaxAggregateInputType = {
    id?: true
    name?: true
    organization?: true
    sucess_story_image?: true
    content?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_success_storyCountAggregateInputType = {
    id?: true
    name?: true
    organization?: true
    sucess_story_image?: true
    content?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_success_storyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_success_story to aggregate.
     */
    where?: tbl_success_storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_success_stories to fetch.
     */
    orderBy?: tbl_success_storyOrderByWithRelationInput | tbl_success_storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_success_storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_success_stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_success_stories
    **/
    _count?: true | Tbl_success_storyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_success_storyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_success_storySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_success_storyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_success_storyMaxAggregateInputType
  }

  export type GetTbl_success_storyAggregateType<T extends Tbl_success_storyAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_success_story]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_success_story[P]>
      : GetScalarType<T[P], AggregateTbl_success_story[P]>
  }




  export type tbl_success_storyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_success_storyWhereInput
    orderBy?: tbl_success_storyOrderByWithAggregationInput | tbl_success_storyOrderByWithAggregationInput[]
    by: Tbl_success_storyScalarFieldEnum[] | Tbl_success_storyScalarFieldEnum
    having?: tbl_success_storyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_success_storyCountAggregateInputType | true
    _avg?: Tbl_success_storyAvgAggregateInputType
    _sum?: Tbl_success_storySumAggregateInputType
    _min?: Tbl_success_storyMinAggregateInputType
    _max?: Tbl_success_storyMaxAggregateInputType
  }

  export type Tbl_success_storyGroupByOutputType = {
    id: number
    name: string
    organization: string | null
    sucess_story_image: string | null
    content: string
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_success_storyCountAggregateOutputType | null
    _avg: Tbl_success_storyAvgAggregateOutputType | null
    _sum: Tbl_success_storySumAggregateOutputType | null
    _min: Tbl_success_storyMinAggregateOutputType | null
    _max: Tbl_success_storyMaxAggregateOutputType | null
  }

  type GetTbl_success_storyGroupByPayload<T extends tbl_success_storyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_success_storyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_success_storyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_success_storyGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_success_storyGroupByOutputType[P]>
        }
      >
    >


  export type tbl_success_storySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organization?: boolean
    sucess_story_image?: boolean
    content?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }, ExtArgs["result"]["tbl_success_story"]>



  export type tbl_success_storySelectScalar = {
    id?: boolean
    name?: boolean
    organization?: boolean
    sucess_story_image?: boolean
    content?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_success_storyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "organization" | "sucess_story_image" | "content" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_success_story"]>

  export type $tbl_success_storyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_success_story"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      organization: string | null
      sucess_story_image: string | null
      content: string
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_success_story"]>
    composites: {}
  }

  type tbl_success_storyGetPayload<S extends boolean | null | undefined | tbl_success_storyDefaultArgs> = $Result.GetResult<Prisma.$tbl_success_storyPayload, S>

  type tbl_success_storyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_success_storyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_success_storyCountAggregateInputType | true
    }

  export interface tbl_success_storyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_success_story'], meta: { name: 'tbl_success_story' } }
    /**
     * Find zero or one Tbl_success_story that matches the filter.
     * @param {tbl_success_storyFindUniqueArgs} args - Arguments to find a Tbl_success_story
     * @example
     * // Get one Tbl_success_story
     * const tbl_success_story = await prisma.tbl_success_story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_success_storyFindUniqueArgs>(args: SelectSubset<T, tbl_success_storyFindUniqueArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_success_story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_success_storyFindUniqueOrThrowArgs} args - Arguments to find a Tbl_success_story
     * @example
     * // Get one Tbl_success_story
     * const tbl_success_story = await prisma.tbl_success_story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_success_storyFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_success_storyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_success_story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_success_storyFindFirstArgs} args - Arguments to find a Tbl_success_story
     * @example
     * // Get one Tbl_success_story
     * const tbl_success_story = await prisma.tbl_success_story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_success_storyFindFirstArgs>(args?: SelectSubset<T, tbl_success_storyFindFirstArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_success_story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_success_storyFindFirstOrThrowArgs} args - Arguments to find a Tbl_success_story
     * @example
     * // Get one Tbl_success_story
     * const tbl_success_story = await prisma.tbl_success_story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_success_storyFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_success_storyFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_success_stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_success_storyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_success_stories
     * const tbl_success_stories = await prisma.tbl_success_story.findMany()
     * 
     * // Get first 10 Tbl_success_stories
     * const tbl_success_stories = await prisma.tbl_success_story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_success_storyWithIdOnly = await prisma.tbl_success_story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_success_storyFindManyArgs>(args?: SelectSubset<T, tbl_success_storyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_success_story.
     * @param {tbl_success_storyCreateArgs} args - Arguments to create a Tbl_success_story.
     * @example
     * // Create one Tbl_success_story
     * const Tbl_success_story = await prisma.tbl_success_story.create({
     *   data: {
     *     // ... data to create a Tbl_success_story
     *   }
     * })
     * 
     */
    create<T extends tbl_success_storyCreateArgs>(args: SelectSubset<T, tbl_success_storyCreateArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_success_stories.
     * @param {tbl_success_storyCreateManyArgs} args - Arguments to create many Tbl_success_stories.
     * @example
     * // Create many Tbl_success_stories
     * const tbl_success_story = await prisma.tbl_success_story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_success_storyCreateManyArgs>(args?: SelectSubset<T, tbl_success_storyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_success_story.
     * @param {tbl_success_storyDeleteArgs} args - Arguments to delete one Tbl_success_story.
     * @example
     * // Delete one Tbl_success_story
     * const Tbl_success_story = await prisma.tbl_success_story.delete({
     *   where: {
     *     // ... filter to delete one Tbl_success_story
     *   }
     * })
     * 
     */
    delete<T extends tbl_success_storyDeleteArgs>(args: SelectSubset<T, tbl_success_storyDeleteArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_success_story.
     * @param {tbl_success_storyUpdateArgs} args - Arguments to update one Tbl_success_story.
     * @example
     * // Update one Tbl_success_story
     * const tbl_success_story = await prisma.tbl_success_story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_success_storyUpdateArgs>(args: SelectSubset<T, tbl_success_storyUpdateArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_success_stories.
     * @param {tbl_success_storyDeleteManyArgs} args - Arguments to filter Tbl_success_stories to delete.
     * @example
     * // Delete a few Tbl_success_stories
     * const { count } = await prisma.tbl_success_story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_success_storyDeleteManyArgs>(args?: SelectSubset<T, tbl_success_storyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_success_stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_success_storyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_success_stories
     * const tbl_success_story = await prisma.tbl_success_story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_success_storyUpdateManyArgs>(args: SelectSubset<T, tbl_success_storyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_success_story.
     * @param {tbl_success_storyUpsertArgs} args - Arguments to update or create a Tbl_success_story.
     * @example
     * // Update or create a Tbl_success_story
     * const tbl_success_story = await prisma.tbl_success_story.upsert({
     *   create: {
     *     // ... data to create a Tbl_success_story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_success_story we want to update
     *   }
     * })
     */
    upsert<T extends tbl_success_storyUpsertArgs>(args: SelectSubset<T, tbl_success_storyUpsertArgs<ExtArgs>>): Prisma__tbl_success_storyClient<$Result.GetResult<Prisma.$tbl_success_storyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_success_stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_success_storyCountArgs} args - Arguments to filter Tbl_success_stories to count.
     * @example
     * // Count the number of Tbl_success_stories
     * const count = await prisma.tbl_success_story.count({
     *   where: {
     *     // ... the filter for the Tbl_success_stories we want to count
     *   }
     * })
    **/
    count<T extends tbl_success_storyCountArgs>(
      args?: Subset<T, tbl_success_storyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_success_storyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_success_story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_success_storyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_success_storyAggregateArgs>(args: Subset<T, Tbl_success_storyAggregateArgs>): Prisma.PrismaPromise<GetTbl_success_storyAggregateType<T>>

    /**
     * Group by Tbl_success_story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_success_storyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_success_storyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_success_storyGroupByArgs['orderBy'] }
        : { orderBy?: tbl_success_storyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_success_storyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_success_storyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_success_story model
   */
  readonly fields: tbl_success_storyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_success_story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_success_storyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_success_story model
   */
  interface tbl_success_storyFieldRefs {
    readonly id: FieldRef<"tbl_success_story", 'Int'>
    readonly name: FieldRef<"tbl_success_story", 'String'>
    readonly organization: FieldRef<"tbl_success_story", 'String'>
    readonly sucess_story_image: FieldRef<"tbl_success_story", 'String'>
    readonly content: FieldRef<"tbl_success_story", 'String'>
    readonly status: FieldRef<"tbl_success_story", 'Int'>
    readonly is_deleted: FieldRef<"tbl_success_story", 'Int'>
    readonly created_on: FieldRef<"tbl_success_story", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_success_story", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_success_story findUnique
   */
  export type tbl_success_storyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * Filter, which tbl_success_story to fetch.
     */
    where: tbl_success_storyWhereUniqueInput
  }

  /**
   * tbl_success_story findUniqueOrThrow
   */
  export type tbl_success_storyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * Filter, which tbl_success_story to fetch.
     */
    where: tbl_success_storyWhereUniqueInput
  }

  /**
   * tbl_success_story findFirst
   */
  export type tbl_success_storyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * Filter, which tbl_success_story to fetch.
     */
    where?: tbl_success_storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_success_stories to fetch.
     */
    orderBy?: tbl_success_storyOrderByWithRelationInput | tbl_success_storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_success_stories.
     */
    cursor?: tbl_success_storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_success_stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_success_stories.
     */
    distinct?: Tbl_success_storyScalarFieldEnum | Tbl_success_storyScalarFieldEnum[]
  }

  /**
   * tbl_success_story findFirstOrThrow
   */
  export type tbl_success_storyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * Filter, which tbl_success_story to fetch.
     */
    where?: tbl_success_storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_success_stories to fetch.
     */
    orderBy?: tbl_success_storyOrderByWithRelationInput | tbl_success_storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_success_stories.
     */
    cursor?: tbl_success_storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_success_stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_success_stories.
     */
    distinct?: Tbl_success_storyScalarFieldEnum | Tbl_success_storyScalarFieldEnum[]
  }

  /**
   * tbl_success_story findMany
   */
  export type tbl_success_storyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * Filter, which tbl_success_stories to fetch.
     */
    where?: tbl_success_storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_success_stories to fetch.
     */
    orderBy?: tbl_success_storyOrderByWithRelationInput | tbl_success_storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_success_stories.
     */
    cursor?: tbl_success_storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_success_stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_success_stories.
     */
    skip?: number
    distinct?: Tbl_success_storyScalarFieldEnum | Tbl_success_storyScalarFieldEnum[]
  }

  /**
   * tbl_success_story create
   */
  export type tbl_success_storyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_success_story.
     */
    data: XOR<tbl_success_storyCreateInput, tbl_success_storyUncheckedCreateInput>
  }

  /**
   * tbl_success_story createMany
   */
  export type tbl_success_storyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_success_stories.
     */
    data: tbl_success_storyCreateManyInput | tbl_success_storyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_success_story update
   */
  export type tbl_success_storyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_success_story.
     */
    data: XOR<tbl_success_storyUpdateInput, tbl_success_storyUncheckedUpdateInput>
    /**
     * Choose, which tbl_success_story to update.
     */
    where: tbl_success_storyWhereUniqueInput
  }

  /**
   * tbl_success_story updateMany
   */
  export type tbl_success_storyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_success_stories.
     */
    data: XOR<tbl_success_storyUpdateManyMutationInput, tbl_success_storyUncheckedUpdateManyInput>
    /**
     * Filter which tbl_success_stories to update
     */
    where?: tbl_success_storyWhereInput
    /**
     * Limit how many tbl_success_stories to update.
     */
    limit?: number
  }

  /**
   * tbl_success_story upsert
   */
  export type tbl_success_storyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_success_story to update in case it exists.
     */
    where: tbl_success_storyWhereUniqueInput
    /**
     * In case the tbl_success_story found by the `where` argument doesn't exist, create a new tbl_success_story with this data.
     */
    create: XOR<tbl_success_storyCreateInput, tbl_success_storyUncheckedCreateInput>
    /**
     * In case the tbl_success_story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_success_storyUpdateInput, tbl_success_storyUncheckedUpdateInput>
  }

  /**
   * tbl_success_story delete
   */
  export type tbl_success_storyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
    /**
     * Filter which tbl_success_story to delete.
     */
    where: tbl_success_storyWhereUniqueInput
  }

  /**
   * tbl_success_story deleteMany
   */
  export type tbl_success_storyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_success_stories to delete
     */
    where?: tbl_success_storyWhereInput
    /**
     * Limit how many tbl_success_stories to delete.
     */
    limit?: number
  }

  /**
   * tbl_success_story without action
   */
  export type tbl_success_storyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_success_story
     */
    select?: tbl_success_storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_success_story
     */
    omit?: tbl_success_storyOmit<ExtArgs> | null
  }


  /**
   * Model tbl_home_improvement_application
   */

  export type AggregateTbl_home_improvement_application = {
    _count: Tbl_home_improvement_applicationCountAggregateOutputType | null
    _avg: Tbl_home_improvement_applicationAvgAggregateOutputType | null
    _sum: Tbl_home_improvement_applicationSumAggregateOutputType | null
    _min: Tbl_home_improvement_applicationMinAggregateOutputType | null
    _max: Tbl_home_improvement_applicationMaxAggregateOutputType | null
  }

  export type Tbl_home_improvement_applicationAvgAggregateOutputType = {
    id: number | null
    active_step: number | null
    is_draft: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_home_improvement_applicationSumAggregateOutputType = {
    id: number | null
    active_step: number | null
    is_draft: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Tbl_home_improvement_applicationMinAggregateOutputType = {
    id: number | null
    application_no: string | null
    application_type: string | null
    active_step: number | null
    is_draft: number | null
    applicant_name: string | null
    applicant_property: string | null
    reside_address: string | null
    email: string | null
    phone_home: string | null
    phone_work: string | null
    phone_cell: string | null
    applicant_employer_name: string | null
    applicant_employer_address: string | null
    coapplicant_employer_name: string | null
    coapplicant_employer_address: string | null
    has_mortgage: string | null
    mortgagee: string | null
    mortgage_amount: string | null
    mortgage_balance: string | null
    gross_annual_income: string | null
    monthly_liabilities_total: string | null
    property_owned_duration: string | null
    number_of_units: string | null
    taxes_paid: string | null
    payment_status: string | null
    total_persons: string | null
    children_under_18: string | null
    renovation_details: string | null
    maintenance_plumbing: boolean | null
    maintenance_electrical: boolean | null
    maintenance_heating_cooling: boolean | null
    maintenance_appliances: boolean | null
    maintenance_doors_windows: boolean | null
    maintenance_flooring_walls: boolean | null
    maintenance_safety: boolean | null
    maintenance_pest: boolean | null
    maintenance_other_text: string | null
    certification_signer_name: string | null
    certification_signature: string | null
    certification_datetime: Date | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_home_improvement_applicationMaxAggregateOutputType = {
    id: number | null
    application_no: string | null
    application_type: string | null
    active_step: number | null
    is_draft: number | null
    applicant_name: string | null
    applicant_property: string | null
    reside_address: string | null
    email: string | null
    phone_home: string | null
    phone_work: string | null
    phone_cell: string | null
    applicant_employer_name: string | null
    applicant_employer_address: string | null
    coapplicant_employer_name: string | null
    coapplicant_employer_address: string | null
    has_mortgage: string | null
    mortgagee: string | null
    mortgage_amount: string | null
    mortgage_balance: string | null
    gross_annual_income: string | null
    monthly_liabilities_total: string | null
    property_owned_duration: string | null
    number_of_units: string | null
    taxes_paid: string | null
    payment_status: string | null
    total_persons: string | null
    children_under_18: string | null
    renovation_details: string | null
    maintenance_plumbing: boolean | null
    maintenance_electrical: boolean | null
    maintenance_heating_cooling: boolean | null
    maintenance_appliances: boolean | null
    maintenance_doors_windows: boolean | null
    maintenance_flooring_walls: boolean | null
    maintenance_safety: boolean | null
    maintenance_pest: boolean | null
    maintenance_other_text: string | null
    certification_signer_name: string | null
    certification_signature: string | null
    certification_datetime: Date | null
    status: number | null
    is_deleted: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_home_improvement_applicationCountAggregateOutputType = {
    id: number
    application_no: number
    application_type: number
    active_step: number
    is_draft: number
    applicant_name: number
    applicant_property: number
    reside_address: number
    email: number
    phone_home: number
    phone_work: number
    phone_cell: number
    applicant_employer_name: number
    applicant_employer_address: number
    coapplicant_employer_name: number
    coapplicant_employer_address: number
    has_mortgage: number
    mortgagee: number
    mortgage_amount: number
    mortgage_balance: number
    gross_annual_income: number
    monthly_liabilities_total: number
    property_owned_duration: number
    number_of_units: number
    taxes_paid: number
    payment_status: number
    total_persons: number
    children_under_18: number
    renovation_details: number
    maintenance_plumbing: number
    maintenance_electrical: number
    maintenance_heating_cooling: number
    maintenance_appliances: number
    maintenance_doors_windows: number
    maintenance_flooring_walls: number
    maintenance_safety: number
    maintenance_pest: number
    maintenance_other_text: number
    certification_signer_name: number
    certification_signature: number
    certification_datetime: number
    status: number
    is_deleted: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_home_improvement_applicationAvgAggregateInputType = {
    id?: true
    active_step?: true
    is_draft?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_home_improvement_applicationSumAggregateInputType = {
    id?: true
    active_step?: true
    is_draft?: true
    status?: true
    is_deleted?: true
  }

  export type Tbl_home_improvement_applicationMinAggregateInputType = {
    id?: true
    application_no?: true
    application_type?: true
    active_step?: true
    is_draft?: true
    applicant_name?: true
    applicant_property?: true
    reside_address?: true
    email?: true
    phone_home?: true
    phone_work?: true
    phone_cell?: true
    applicant_employer_name?: true
    applicant_employer_address?: true
    coapplicant_employer_name?: true
    coapplicant_employer_address?: true
    has_mortgage?: true
    mortgagee?: true
    mortgage_amount?: true
    mortgage_balance?: true
    gross_annual_income?: true
    monthly_liabilities_total?: true
    property_owned_duration?: true
    number_of_units?: true
    taxes_paid?: true
    payment_status?: true
    total_persons?: true
    children_under_18?: true
    renovation_details?: true
    maintenance_plumbing?: true
    maintenance_electrical?: true
    maintenance_heating_cooling?: true
    maintenance_appliances?: true
    maintenance_doors_windows?: true
    maintenance_flooring_walls?: true
    maintenance_safety?: true
    maintenance_pest?: true
    maintenance_other_text?: true
    certification_signer_name?: true
    certification_signature?: true
    certification_datetime?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_home_improvement_applicationMaxAggregateInputType = {
    id?: true
    application_no?: true
    application_type?: true
    active_step?: true
    is_draft?: true
    applicant_name?: true
    applicant_property?: true
    reside_address?: true
    email?: true
    phone_home?: true
    phone_work?: true
    phone_cell?: true
    applicant_employer_name?: true
    applicant_employer_address?: true
    coapplicant_employer_name?: true
    coapplicant_employer_address?: true
    has_mortgage?: true
    mortgagee?: true
    mortgage_amount?: true
    mortgage_balance?: true
    gross_annual_income?: true
    monthly_liabilities_total?: true
    property_owned_duration?: true
    number_of_units?: true
    taxes_paid?: true
    payment_status?: true
    total_persons?: true
    children_under_18?: true
    renovation_details?: true
    maintenance_plumbing?: true
    maintenance_electrical?: true
    maintenance_heating_cooling?: true
    maintenance_appliances?: true
    maintenance_doors_windows?: true
    maintenance_flooring_walls?: true
    maintenance_safety?: true
    maintenance_pest?: true
    maintenance_other_text?: true
    certification_signer_name?: true
    certification_signature?: true
    certification_datetime?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_home_improvement_applicationCountAggregateInputType = {
    id?: true
    application_no?: true
    application_type?: true
    active_step?: true
    is_draft?: true
    applicant_name?: true
    applicant_property?: true
    reside_address?: true
    email?: true
    phone_home?: true
    phone_work?: true
    phone_cell?: true
    applicant_employer_name?: true
    applicant_employer_address?: true
    coapplicant_employer_name?: true
    coapplicant_employer_address?: true
    has_mortgage?: true
    mortgagee?: true
    mortgage_amount?: true
    mortgage_balance?: true
    gross_annual_income?: true
    monthly_liabilities_total?: true
    property_owned_duration?: true
    number_of_units?: true
    taxes_paid?: true
    payment_status?: true
    total_persons?: true
    children_under_18?: true
    renovation_details?: true
    maintenance_plumbing?: true
    maintenance_electrical?: true
    maintenance_heating_cooling?: true
    maintenance_appliances?: true
    maintenance_doors_windows?: true
    maintenance_flooring_walls?: true
    maintenance_safety?: true
    maintenance_pest?: true
    maintenance_other_text?: true
    certification_signer_name?: true
    certification_signature?: true
    certification_datetime?: true
    status?: true
    is_deleted?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_home_improvement_applicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_home_improvement_application to aggregate.
     */
    where?: tbl_home_improvement_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_home_improvement_applications to fetch.
     */
    orderBy?: tbl_home_improvement_applicationOrderByWithRelationInput | tbl_home_improvement_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_home_improvement_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_home_improvement_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_home_improvement_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_home_improvement_applications
    **/
    _count?: true | Tbl_home_improvement_applicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_home_improvement_applicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_home_improvement_applicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_home_improvement_applicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_home_improvement_applicationMaxAggregateInputType
  }

  export type GetTbl_home_improvement_applicationAggregateType<T extends Tbl_home_improvement_applicationAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_home_improvement_application]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_home_improvement_application[P]>
      : GetScalarType<T[P], AggregateTbl_home_improvement_application[P]>
  }




  export type tbl_home_improvement_applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_home_improvement_applicationWhereInput
    orderBy?: tbl_home_improvement_applicationOrderByWithAggregationInput | tbl_home_improvement_applicationOrderByWithAggregationInput[]
    by: Tbl_home_improvement_applicationScalarFieldEnum[] | Tbl_home_improvement_applicationScalarFieldEnum
    having?: tbl_home_improvement_applicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_home_improvement_applicationCountAggregateInputType | true
    _avg?: Tbl_home_improvement_applicationAvgAggregateInputType
    _sum?: Tbl_home_improvement_applicationSumAggregateInputType
    _min?: Tbl_home_improvement_applicationMinAggregateInputType
    _max?: Tbl_home_improvement_applicationMaxAggregateInputType
  }

  export type Tbl_home_improvement_applicationGroupByOutputType = {
    id: number
    application_no: string
    application_type: string
    active_step: number
    is_draft: number
    applicant_name: string | null
    applicant_property: string | null
    reside_address: string | null
    email: string | null
    phone_home: string | null
    phone_work: string | null
    phone_cell: string | null
    applicant_employer_name: string | null
    applicant_employer_address: string | null
    coapplicant_employer_name: string | null
    coapplicant_employer_address: string | null
    has_mortgage: string | null
    mortgagee: string | null
    mortgage_amount: string | null
    mortgage_balance: string | null
    gross_annual_income: string | null
    monthly_liabilities_total: string | null
    property_owned_duration: string | null
    number_of_units: string | null
    taxes_paid: string | null
    payment_status: string | null
    total_persons: string | null
    children_under_18: string | null
    renovation_details: string | null
    maintenance_plumbing: boolean
    maintenance_electrical: boolean
    maintenance_heating_cooling: boolean
    maintenance_appliances: boolean
    maintenance_doors_windows: boolean
    maintenance_flooring_walls: boolean
    maintenance_safety: boolean
    maintenance_pest: boolean
    maintenance_other_text: string | null
    certification_signer_name: string | null
    certification_signature: string | null
    certification_datetime: Date | null
    status: number
    is_deleted: number
    created_on: Date
    updated_on: Date
    _count: Tbl_home_improvement_applicationCountAggregateOutputType | null
    _avg: Tbl_home_improvement_applicationAvgAggregateOutputType | null
    _sum: Tbl_home_improvement_applicationSumAggregateOutputType | null
    _min: Tbl_home_improvement_applicationMinAggregateOutputType | null
    _max: Tbl_home_improvement_applicationMaxAggregateOutputType | null
  }

  type GetTbl_home_improvement_applicationGroupByPayload<T extends tbl_home_improvement_applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_home_improvement_applicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_home_improvement_applicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_home_improvement_applicationGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_home_improvement_applicationGroupByOutputType[P]>
        }
      >
    >


  export type tbl_home_improvement_applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    application_no?: boolean
    application_type?: boolean
    active_step?: boolean
    is_draft?: boolean
    applicant_name?: boolean
    applicant_property?: boolean
    reside_address?: boolean
    email?: boolean
    phone_home?: boolean
    phone_work?: boolean
    phone_cell?: boolean
    applicant_employer_name?: boolean
    applicant_employer_address?: boolean
    coapplicant_employer_name?: boolean
    coapplicant_employer_address?: boolean
    has_mortgage?: boolean
    mortgagee?: boolean
    mortgage_amount?: boolean
    mortgage_balance?: boolean
    gross_annual_income?: boolean
    monthly_liabilities_total?: boolean
    property_owned_duration?: boolean
    number_of_units?: boolean
    taxes_paid?: boolean
    payment_status?: boolean
    total_persons?: boolean
    children_under_18?: boolean
    renovation_details?: boolean
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: boolean
    certification_signer_name?: boolean
    certification_signature?: boolean
    certification_datetime?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
    household_members?: boolean | tbl_home_improvement_application$household_membersArgs<ExtArgs>
    monthly_liabilities?: boolean | tbl_home_improvement_application$monthly_liabilitiesArgs<ExtArgs>
    _count?: boolean | Tbl_home_improvement_applicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_home_improvement_application"]>



  export type tbl_home_improvement_applicationSelectScalar = {
    id?: boolean
    application_no?: boolean
    application_type?: boolean
    active_step?: boolean
    is_draft?: boolean
    applicant_name?: boolean
    applicant_property?: boolean
    reside_address?: boolean
    email?: boolean
    phone_home?: boolean
    phone_work?: boolean
    phone_cell?: boolean
    applicant_employer_name?: boolean
    applicant_employer_address?: boolean
    coapplicant_employer_name?: boolean
    coapplicant_employer_address?: boolean
    has_mortgage?: boolean
    mortgagee?: boolean
    mortgage_amount?: boolean
    mortgage_balance?: boolean
    gross_annual_income?: boolean
    monthly_liabilities_total?: boolean
    property_owned_duration?: boolean
    number_of_units?: boolean
    taxes_paid?: boolean
    payment_status?: boolean
    total_persons?: boolean
    children_under_18?: boolean
    renovation_details?: boolean
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: boolean
    certification_signer_name?: boolean
    certification_signature?: boolean
    certification_datetime?: boolean
    status?: boolean
    is_deleted?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_home_improvement_applicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "application_no" | "application_type" | "active_step" | "is_draft" | "applicant_name" | "applicant_property" | "reside_address" | "email" | "phone_home" | "phone_work" | "phone_cell" | "applicant_employer_name" | "applicant_employer_address" | "coapplicant_employer_name" | "coapplicant_employer_address" | "has_mortgage" | "mortgagee" | "mortgage_amount" | "mortgage_balance" | "gross_annual_income" | "monthly_liabilities_total" | "property_owned_duration" | "number_of_units" | "taxes_paid" | "payment_status" | "total_persons" | "children_under_18" | "renovation_details" | "maintenance_plumbing" | "maintenance_electrical" | "maintenance_heating_cooling" | "maintenance_appliances" | "maintenance_doors_windows" | "maintenance_flooring_walls" | "maintenance_safety" | "maintenance_pest" | "maintenance_other_text" | "certification_signer_name" | "certification_signature" | "certification_datetime" | "status" | "is_deleted" | "created_on" | "updated_on", ExtArgs["result"]["tbl_home_improvement_application"]>
  export type tbl_home_improvement_applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household_members?: boolean | tbl_home_improvement_application$household_membersArgs<ExtArgs>
    monthly_liabilities?: boolean | tbl_home_improvement_application$monthly_liabilitiesArgs<ExtArgs>
    _count?: boolean | Tbl_home_improvement_applicationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_home_improvement_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_home_improvement_application"
    objects: {
      household_members: Prisma.$tbl_household_memberPayload<ExtArgs>[]
      monthly_liabilities: Prisma.$tbl_monthly_liabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      application_no: string
      application_type: string
      active_step: number
      is_draft: number
      applicant_name: string | null
      applicant_property: string | null
      reside_address: string | null
      email: string | null
      phone_home: string | null
      phone_work: string | null
      phone_cell: string | null
      applicant_employer_name: string | null
      applicant_employer_address: string | null
      coapplicant_employer_name: string | null
      coapplicant_employer_address: string | null
      has_mortgage: string | null
      mortgagee: string | null
      mortgage_amount: string | null
      mortgage_balance: string | null
      gross_annual_income: string | null
      monthly_liabilities_total: string | null
      property_owned_duration: string | null
      number_of_units: string | null
      taxes_paid: string | null
      payment_status: string | null
      total_persons: string | null
      children_under_18: string | null
      renovation_details: string | null
      maintenance_plumbing: boolean
      maintenance_electrical: boolean
      maintenance_heating_cooling: boolean
      maintenance_appliances: boolean
      maintenance_doors_windows: boolean
      maintenance_flooring_walls: boolean
      maintenance_safety: boolean
      maintenance_pest: boolean
      maintenance_other_text: string | null
      certification_signer_name: string | null
      certification_signature: string | null
      certification_datetime: Date | null
      status: number
      is_deleted: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_home_improvement_application"]>
    composites: {}
  }

  type tbl_home_improvement_applicationGetPayload<S extends boolean | null | undefined | tbl_home_improvement_applicationDefaultArgs> = $Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload, S>

  type tbl_home_improvement_applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_home_improvement_applicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_home_improvement_applicationCountAggregateInputType | true
    }

  export interface tbl_home_improvement_applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_home_improvement_application'], meta: { name: 'tbl_home_improvement_application' } }
    /**
     * Find zero or one Tbl_home_improvement_application that matches the filter.
     * @param {tbl_home_improvement_applicationFindUniqueArgs} args - Arguments to find a Tbl_home_improvement_application
     * @example
     * // Get one Tbl_home_improvement_application
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_home_improvement_applicationFindUniqueArgs>(args: SelectSubset<T, tbl_home_improvement_applicationFindUniqueArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_home_improvement_application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_home_improvement_applicationFindUniqueOrThrowArgs} args - Arguments to find a Tbl_home_improvement_application
     * @example
     * // Get one Tbl_home_improvement_application
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_home_improvement_applicationFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_home_improvement_applicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_home_improvement_application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_home_improvement_applicationFindFirstArgs} args - Arguments to find a Tbl_home_improvement_application
     * @example
     * // Get one Tbl_home_improvement_application
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_home_improvement_applicationFindFirstArgs>(args?: SelectSubset<T, tbl_home_improvement_applicationFindFirstArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_home_improvement_application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_home_improvement_applicationFindFirstOrThrowArgs} args - Arguments to find a Tbl_home_improvement_application
     * @example
     * // Get one Tbl_home_improvement_application
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_home_improvement_applicationFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_home_improvement_applicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_home_improvement_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_home_improvement_applicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_home_improvement_applications
     * const tbl_home_improvement_applications = await prisma.tbl_home_improvement_application.findMany()
     * 
     * // Get first 10 Tbl_home_improvement_applications
     * const tbl_home_improvement_applications = await prisma.tbl_home_improvement_application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_home_improvement_applicationWithIdOnly = await prisma.tbl_home_improvement_application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_home_improvement_applicationFindManyArgs>(args?: SelectSubset<T, tbl_home_improvement_applicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_home_improvement_application.
     * @param {tbl_home_improvement_applicationCreateArgs} args - Arguments to create a Tbl_home_improvement_application.
     * @example
     * // Create one Tbl_home_improvement_application
     * const Tbl_home_improvement_application = await prisma.tbl_home_improvement_application.create({
     *   data: {
     *     // ... data to create a Tbl_home_improvement_application
     *   }
     * })
     * 
     */
    create<T extends tbl_home_improvement_applicationCreateArgs>(args: SelectSubset<T, tbl_home_improvement_applicationCreateArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_home_improvement_applications.
     * @param {tbl_home_improvement_applicationCreateManyArgs} args - Arguments to create many Tbl_home_improvement_applications.
     * @example
     * // Create many Tbl_home_improvement_applications
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_home_improvement_applicationCreateManyArgs>(args?: SelectSubset<T, tbl_home_improvement_applicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_home_improvement_application.
     * @param {tbl_home_improvement_applicationDeleteArgs} args - Arguments to delete one Tbl_home_improvement_application.
     * @example
     * // Delete one Tbl_home_improvement_application
     * const Tbl_home_improvement_application = await prisma.tbl_home_improvement_application.delete({
     *   where: {
     *     // ... filter to delete one Tbl_home_improvement_application
     *   }
     * })
     * 
     */
    delete<T extends tbl_home_improvement_applicationDeleteArgs>(args: SelectSubset<T, tbl_home_improvement_applicationDeleteArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_home_improvement_application.
     * @param {tbl_home_improvement_applicationUpdateArgs} args - Arguments to update one Tbl_home_improvement_application.
     * @example
     * // Update one Tbl_home_improvement_application
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_home_improvement_applicationUpdateArgs>(args: SelectSubset<T, tbl_home_improvement_applicationUpdateArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_home_improvement_applications.
     * @param {tbl_home_improvement_applicationDeleteManyArgs} args - Arguments to filter Tbl_home_improvement_applications to delete.
     * @example
     * // Delete a few Tbl_home_improvement_applications
     * const { count } = await prisma.tbl_home_improvement_application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_home_improvement_applicationDeleteManyArgs>(args?: SelectSubset<T, tbl_home_improvement_applicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_home_improvement_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_home_improvement_applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_home_improvement_applications
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_home_improvement_applicationUpdateManyArgs>(args: SelectSubset<T, tbl_home_improvement_applicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_home_improvement_application.
     * @param {tbl_home_improvement_applicationUpsertArgs} args - Arguments to update or create a Tbl_home_improvement_application.
     * @example
     * // Update or create a Tbl_home_improvement_application
     * const tbl_home_improvement_application = await prisma.tbl_home_improvement_application.upsert({
     *   create: {
     *     // ... data to create a Tbl_home_improvement_application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_home_improvement_application we want to update
     *   }
     * })
     */
    upsert<T extends tbl_home_improvement_applicationUpsertArgs>(args: SelectSubset<T, tbl_home_improvement_applicationUpsertArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_home_improvement_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_home_improvement_applicationCountArgs} args - Arguments to filter Tbl_home_improvement_applications to count.
     * @example
     * // Count the number of Tbl_home_improvement_applications
     * const count = await prisma.tbl_home_improvement_application.count({
     *   where: {
     *     // ... the filter for the Tbl_home_improvement_applications we want to count
     *   }
     * })
    **/
    count<T extends tbl_home_improvement_applicationCountArgs>(
      args?: Subset<T, tbl_home_improvement_applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_home_improvement_applicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_home_improvement_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_home_improvement_applicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_home_improvement_applicationAggregateArgs>(args: Subset<T, Tbl_home_improvement_applicationAggregateArgs>): Prisma.PrismaPromise<GetTbl_home_improvement_applicationAggregateType<T>>

    /**
     * Group by Tbl_home_improvement_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_home_improvement_applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_home_improvement_applicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_home_improvement_applicationGroupByArgs['orderBy'] }
        : { orderBy?: tbl_home_improvement_applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_home_improvement_applicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_home_improvement_applicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_home_improvement_application model
   */
  readonly fields: tbl_home_improvement_applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_home_improvement_application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_home_improvement_applicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household_members<T extends tbl_home_improvement_application$household_membersArgs<ExtArgs> = {}>(args?: Subset<T, tbl_home_improvement_application$household_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthly_liabilities<T extends tbl_home_improvement_application$monthly_liabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_home_improvement_application$monthly_liabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_home_improvement_application model
   */
  interface tbl_home_improvement_applicationFieldRefs {
    readonly id: FieldRef<"tbl_home_improvement_application", 'Int'>
    readonly application_no: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly application_type: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly active_step: FieldRef<"tbl_home_improvement_application", 'Int'>
    readonly is_draft: FieldRef<"tbl_home_improvement_application", 'Int'>
    readonly applicant_name: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly applicant_property: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly reside_address: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly email: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly phone_home: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly phone_work: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly phone_cell: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly applicant_employer_name: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly applicant_employer_address: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly coapplicant_employer_name: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly coapplicant_employer_address: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly has_mortgage: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly mortgagee: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly mortgage_amount: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly mortgage_balance: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly gross_annual_income: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly monthly_liabilities_total: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly property_owned_duration: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly number_of_units: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly taxes_paid: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly payment_status: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly total_persons: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly children_under_18: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly renovation_details: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly maintenance_plumbing: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_electrical: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_heating_cooling: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_appliances: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_doors_windows: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_flooring_walls: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_safety: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_pest: FieldRef<"tbl_home_improvement_application", 'Boolean'>
    readonly maintenance_other_text: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly certification_signer_name: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly certification_signature: FieldRef<"tbl_home_improvement_application", 'String'>
    readonly certification_datetime: FieldRef<"tbl_home_improvement_application", 'DateTime'>
    readonly status: FieldRef<"tbl_home_improvement_application", 'Int'>
    readonly is_deleted: FieldRef<"tbl_home_improvement_application", 'Int'>
    readonly created_on: FieldRef<"tbl_home_improvement_application", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_home_improvement_application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_home_improvement_application findUnique
   */
  export type tbl_home_improvement_applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * Filter, which tbl_home_improvement_application to fetch.
     */
    where: tbl_home_improvement_applicationWhereUniqueInput
  }

  /**
   * tbl_home_improvement_application findUniqueOrThrow
   */
  export type tbl_home_improvement_applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * Filter, which tbl_home_improvement_application to fetch.
     */
    where: tbl_home_improvement_applicationWhereUniqueInput
  }

  /**
   * tbl_home_improvement_application findFirst
   */
  export type tbl_home_improvement_applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * Filter, which tbl_home_improvement_application to fetch.
     */
    where?: tbl_home_improvement_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_home_improvement_applications to fetch.
     */
    orderBy?: tbl_home_improvement_applicationOrderByWithRelationInput | tbl_home_improvement_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_home_improvement_applications.
     */
    cursor?: tbl_home_improvement_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_home_improvement_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_home_improvement_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_home_improvement_applications.
     */
    distinct?: Tbl_home_improvement_applicationScalarFieldEnum | Tbl_home_improvement_applicationScalarFieldEnum[]
  }

  /**
   * tbl_home_improvement_application findFirstOrThrow
   */
  export type tbl_home_improvement_applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * Filter, which tbl_home_improvement_application to fetch.
     */
    where?: tbl_home_improvement_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_home_improvement_applications to fetch.
     */
    orderBy?: tbl_home_improvement_applicationOrderByWithRelationInput | tbl_home_improvement_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_home_improvement_applications.
     */
    cursor?: tbl_home_improvement_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_home_improvement_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_home_improvement_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_home_improvement_applications.
     */
    distinct?: Tbl_home_improvement_applicationScalarFieldEnum | Tbl_home_improvement_applicationScalarFieldEnum[]
  }

  /**
   * tbl_home_improvement_application findMany
   */
  export type tbl_home_improvement_applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * Filter, which tbl_home_improvement_applications to fetch.
     */
    where?: tbl_home_improvement_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_home_improvement_applications to fetch.
     */
    orderBy?: tbl_home_improvement_applicationOrderByWithRelationInput | tbl_home_improvement_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_home_improvement_applications.
     */
    cursor?: tbl_home_improvement_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_home_improvement_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_home_improvement_applications.
     */
    skip?: number
    distinct?: Tbl_home_improvement_applicationScalarFieldEnum | Tbl_home_improvement_applicationScalarFieldEnum[]
  }

  /**
   * tbl_home_improvement_application create
   */
  export type tbl_home_improvement_applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_home_improvement_application.
     */
    data: XOR<tbl_home_improvement_applicationCreateInput, tbl_home_improvement_applicationUncheckedCreateInput>
  }

  /**
   * tbl_home_improvement_application createMany
   */
  export type tbl_home_improvement_applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_home_improvement_applications.
     */
    data: tbl_home_improvement_applicationCreateManyInput | tbl_home_improvement_applicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_home_improvement_application update
   */
  export type tbl_home_improvement_applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_home_improvement_application.
     */
    data: XOR<tbl_home_improvement_applicationUpdateInput, tbl_home_improvement_applicationUncheckedUpdateInput>
    /**
     * Choose, which tbl_home_improvement_application to update.
     */
    where: tbl_home_improvement_applicationWhereUniqueInput
  }

  /**
   * tbl_home_improvement_application updateMany
   */
  export type tbl_home_improvement_applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_home_improvement_applications.
     */
    data: XOR<tbl_home_improvement_applicationUpdateManyMutationInput, tbl_home_improvement_applicationUncheckedUpdateManyInput>
    /**
     * Filter which tbl_home_improvement_applications to update
     */
    where?: tbl_home_improvement_applicationWhereInput
    /**
     * Limit how many tbl_home_improvement_applications to update.
     */
    limit?: number
  }

  /**
   * tbl_home_improvement_application upsert
   */
  export type tbl_home_improvement_applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_home_improvement_application to update in case it exists.
     */
    where: tbl_home_improvement_applicationWhereUniqueInput
    /**
     * In case the tbl_home_improvement_application found by the `where` argument doesn't exist, create a new tbl_home_improvement_application with this data.
     */
    create: XOR<tbl_home_improvement_applicationCreateInput, tbl_home_improvement_applicationUncheckedCreateInput>
    /**
     * In case the tbl_home_improvement_application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_home_improvement_applicationUpdateInput, tbl_home_improvement_applicationUncheckedUpdateInput>
  }

  /**
   * tbl_home_improvement_application delete
   */
  export type tbl_home_improvement_applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
    /**
     * Filter which tbl_home_improvement_application to delete.
     */
    where: tbl_home_improvement_applicationWhereUniqueInput
  }

  /**
   * tbl_home_improvement_application deleteMany
   */
  export type tbl_home_improvement_applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_home_improvement_applications to delete
     */
    where?: tbl_home_improvement_applicationWhereInput
    /**
     * Limit how many tbl_home_improvement_applications to delete.
     */
    limit?: number
  }

  /**
   * tbl_home_improvement_application.household_members
   */
  export type tbl_home_improvement_application$household_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    where?: tbl_household_memberWhereInput
    orderBy?: tbl_household_memberOrderByWithRelationInput | tbl_household_memberOrderByWithRelationInput[]
    cursor?: tbl_household_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_household_memberScalarFieldEnum | Tbl_household_memberScalarFieldEnum[]
  }

  /**
   * tbl_home_improvement_application.monthly_liabilities
   */
  export type tbl_home_improvement_application$monthly_liabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    where?: tbl_monthly_liabilityWhereInput
    orderBy?: tbl_monthly_liabilityOrderByWithRelationInput | tbl_monthly_liabilityOrderByWithRelationInput[]
    cursor?: tbl_monthly_liabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_monthly_liabilityScalarFieldEnum | Tbl_monthly_liabilityScalarFieldEnum[]
  }

  /**
   * tbl_home_improvement_application without action
   */
  export type tbl_home_improvement_applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_home_improvement_application
     */
    select?: tbl_home_improvement_applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_home_improvement_application
     */
    omit?: tbl_home_improvement_applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_home_improvement_applicationInclude<ExtArgs> | null
  }


  /**
   * Model tbl_household_member
   */

  export type AggregateTbl_household_member = {
    _count: Tbl_household_memberCountAggregateOutputType | null
    _avg: Tbl_household_memberAvgAggregateOutputType | null
    _sum: Tbl_household_memberSumAggregateOutputType | null
    _min: Tbl_household_memberMinAggregateOutputType | null
    _max: Tbl_household_memberMaxAggregateOutputType | null
  }

  export type Tbl_household_memberAvgAggregateOutputType = {
    id: number | null
    application_id: number | null
    age: number | null
  }

  export type Tbl_household_memberSumAggregateOutputType = {
    id: number | null
    application_id: number | null
    age: number | null
  }

  export type Tbl_household_memberMinAggregateOutputType = {
    id: number | null
    application_id: number | null
    name: string | null
    age: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_household_memberMaxAggregateOutputType = {
    id: number | null
    application_id: number | null
    name: string | null
    age: number | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_household_memberCountAggregateOutputType = {
    id: number
    application_id: number
    name: number
    age: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_household_memberAvgAggregateInputType = {
    id?: true
    application_id?: true
    age?: true
  }

  export type Tbl_household_memberSumAggregateInputType = {
    id?: true
    application_id?: true
    age?: true
  }

  export type Tbl_household_memberMinAggregateInputType = {
    id?: true
    application_id?: true
    name?: true
    age?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_household_memberMaxAggregateInputType = {
    id?: true
    application_id?: true
    name?: true
    age?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_household_memberCountAggregateInputType = {
    id?: true
    application_id?: true
    name?: true
    age?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_household_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_household_member to aggregate.
     */
    where?: tbl_household_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_household_members to fetch.
     */
    orderBy?: tbl_household_memberOrderByWithRelationInput | tbl_household_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_household_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_household_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_household_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_household_members
    **/
    _count?: true | Tbl_household_memberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_household_memberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_household_memberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_household_memberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_household_memberMaxAggregateInputType
  }

  export type GetTbl_household_memberAggregateType<T extends Tbl_household_memberAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_household_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_household_member[P]>
      : GetScalarType<T[P], AggregateTbl_household_member[P]>
  }




  export type tbl_household_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_household_memberWhereInput
    orderBy?: tbl_household_memberOrderByWithAggregationInput | tbl_household_memberOrderByWithAggregationInput[]
    by: Tbl_household_memberScalarFieldEnum[] | Tbl_household_memberScalarFieldEnum
    having?: tbl_household_memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_household_memberCountAggregateInputType | true
    _avg?: Tbl_household_memberAvgAggregateInputType
    _sum?: Tbl_household_memberSumAggregateInputType
    _min?: Tbl_household_memberMinAggregateInputType
    _max?: Tbl_household_memberMaxAggregateInputType
  }

  export type Tbl_household_memberGroupByOutputType = {
    id: number
    application_id: number
    name: string
    age: number
    created_on: Date
    updated_on: Date
    _count: Tbl_household_memberCountAggregateOutputType | null
    _avg: Tbl_household_memberAvgAggregateOutputType | null
    _sum: Tbl_household_memberSumAggregateOutputType | null
    _min: Tbl_household_memberMinAggregateOutputType | null
    _max: Tbl_household_memberMaxAggregateOutputType | null
  }

  type GetTbl_household_memberGroupByPayload<T extends tbl_household_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_household_memberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_household_memberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_household_memberGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_household_memberGroupByOutputType[P]>
        }
      >
    >


  export type tbl_household_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    application_id?: boolean
    name?: boolean
    age?: boolean
    created_on?: boolean
    updated_on?: boolean
    application?: boolean | tbl_home_improvement_applicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_household_member"]>



  export type tbl_household_memberSelectScalar = {
    id?: boolean
    application_id?: boolean
    name?: boolean
    age?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_household_memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "application_id" | "name" | "age" | "created_on" | "updated_on", ExtArgs["result"]["tbl_household_member"]>
  export type tbl_household_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | tbl_home_improvement_applicationDefaultArgs<ExtArgs>
  }

  export type $tbl_household_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_household_member"
    objects: {
      application: Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      application_id: number
      name: string
      age: number
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_household_member"]>
    composites: {}
  }

  type tbl_household_memberGetPayload<S extends boolean | null | undefined | tbl_household_memberDefaultArgs> = $Result.GetResult<Prisma.$tbl_household_memberPayload, S>

  type tbl_household_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_household_memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_household_memberCountAggregateInputType | true
    }

  export interface tbl_household_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_household_member'], meta: { name: 'tbl_household_member' } }
    /**
     * Find zero or one Tbl_household_member that matches the filter.
     * @param {tbl_household_memberFindUniqueArgs} args - Arguments to find a Tbl_household_member
     * @example
     * // Get one Tbl_household_member
     * const tbl_household_member = await prisma.tbl_household_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_household_memberFindUniqueArgs>(args: SelectSubset<T, tbl_household_memberFindUniqueArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_household_member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_household_memberFindUniqueOrThrowArgs} args - Arguments to find a Tbl_household_member
     * @example
     * // Get one Tbl_household_member
     * const tbl_household_member = await prisma.tbl_household_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_household_memberFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_household_memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_household_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_household_memberFindFirstArgs} args - Arguments to find a Tbl_household_member
     * @example
     * // Get one Tbl_household_member
     * const tbl_household_member = await prisma.tbl_household_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_household_memberFindFirstArgs>(args?: SelectSubset<T, tbl_household_memberFindFirstArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_household_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_household_memberFindFirstOrThrowArgs} args - Arguments to find a Tbl_household_member
     * @example
     * // Get one Tbl_household_member
     * const tbl_household_member = await prisma.tbl_household_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_household_memberFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_household_memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_household_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_household_memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_household_members
     * const tbl_household_members = await prisma.tbl_household_member.findMany()
     * 
     * // Get first 10 Tbl_household_members
     * const tbl_household_members = await prisma.tbl_household_member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_household_memberWithIdOnly = await prisma.tbl_household_member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_household_memberFindManyArgs>(args?: SelectSubset<T, tbl_household_memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_household_member.
     * @param {tbl_household_memberCreateArgs} args - Arguments to create a Tbl_household_member.
     * @example
     * // Create one Tbl_household_member
     * const Tbl_household_member = await prisma.tbl_household_member.create({
     *   data: {
     *     // ... data to create a Tbl_household_member
     *   }
     * })
     * 
     */
    create<T extends tbl_household_memberCreateArgs>(args: SelectSubset<T, tbl_household_memberCreateArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_household_members.
     * @param {tbl_household_memberCreateManyArgs} args - Arguments to create many Tbl_household_members.
     * @example
     * // Create many Tbl_household_members
     * const tbl_household_member = await prisma.tbl_household_member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_household_memberCreateManyArgs>(args?: SelectSubset<T, tbl_household_memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_household_member.
     * @param {tbl_household_memberDeleteArgs} args - Arguments to delete one Tbl_household_member.
     * @example
     * // Delete one Tbl_household_member
     * const Tbl_household_member = await prisma.tbl_household_member.delete({
     *   where: {
     *     // ... filter to delete one Tbl_household_member
     *   }
     * })
     * 
     */
    delete<T extends tbl_household_memberDeleteArgs>(args: SelectSubset<T, tbl_household_memberDeleteArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_household_member.
     * @param {tbl_household_memberUpdateArgs} args - Arguments to update one Tbl_household_member.
     * @example
     * // Update one Tbl_household_member
     * const tbl_household_member = await prisma.tbl_household_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_household_memberUpdateArgs>(args: SelectSubset<T, tbl_household_memberUpdateArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_household_members.
     * @param {tbl_household_memberDeleteManyArgs} args - Arguments to filter Tbl_household_members to delete.
     * @example
     * // Delete a few Tbl_household_members
     * const { count } = await prisma.tbl_household_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_household_memberDeleteManyArgs>(args?: SelectSubset<T, tbl_household_memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_household_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_household_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_household_members
     * const tbl_household_member = await prisma.tbl_household_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_household_memberUpdateManyArgs>(args: SelectSubset<T, tbl_household_memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_household_member.
     * @param {tbl_household_memberUpsertArgs} args - Arguments to update or create a Tbl_household_member.
     * @example
     * // Update or create a Tbl_household_member
     * const tbl_household_member = await prisma.tbl_household_member.upsert({
     *   create: {
     *     // ... data to create a Tbl_household_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_household_member we want to update
     *   }
     * })
     */
    upsert<T extends tbl_household_memberUpsertArgs>(args: SelectSubset<T, tbl_household_memberUpsertArgs<ExtArgs>>): Prisma__tbl_household_memberClient<$Result.GetResult<Prisma.$tbl_household_memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_household_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_household_memberCountArgs} args - Arguments to filter Tbl_household_members to count.
     * @example
     * // Count the number of Tbl_household_members
     * const count = await prisma.tbl_household_member.count({
     *   where: {
     *     // ... the filter for the Tbl_household_members we want to count
     *   }
     * })
    **/
    count<T extends tbl_household_memberCountArgs>(
      args?: Subset<T, tbl_household_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_household_memberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_household_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_household_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_household_memberAggregateArgs>(args: Subset<T, Tbl_household_memberAggregateArgs>): Prisma.PrismaPromise<GetTbl_household_memberAggregateType<T>>

    /**
     * Group by Tbl_household_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_household_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_household_memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_household_memberGroupByArgs['orderBy'] }
        : { orderBy?: tbl_household_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_household_memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_household_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_household_member model
   */
  readonly fields: tbl_household_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_household_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_household_memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends tbl_home_improvement_applicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_home_improvement_applicationDefaultArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_household_member model
   */
  interface tbl_household_memberFieldRefs {
    readonly id: FieldRef<"tbl_household_member", 'Int'>
    readonly application_id: FieldRef<"tbl_household_member", 'Int'>
    readonly name: FieldRef<"tbl_household_member", 'String'>
    readonly age: FieldRef<"tbl_household_member", 'Int'>
    readonly created_on: FieldRef<"tbl_household_member", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_household_member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_household_member findUnique
   */
  export type tbl_household_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * Filter, which tbl_household_member to fetch.
     */
    where: tbl_household_memberWhereUniqueInput
  }

  /**
   * tbl_household_member findUniqueOrThrow
   */
  export type tbl_household_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * Filter, which tbl_household_member to fetch.
     */
    where: tbl_household_memberWhereUniqueInput
  }

  /**
   * tbl_household_member findFirst
   */
  export type tbl_household_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * Filter, which tbl_household_member to fetch.
     */
    where?: tbl_household_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_household_members to fetch.
     */
    orderBy?: tbl_household_memberOrderByWithRelationInput | tbl_household_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_household_members.
     */
    cursor?: tbl_household_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_household_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_household_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_household_members.
     */
    distinct?: Tbl_household_memberScalarFieldEnum | Tbl_household_memberScalarFieldEnum[]
  }

  /**
   * tbl_household_member findFirstOrThrow
   */
  export type tbl_household_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * Filter, which tbl_household_member to fetch.
     */
    where?: tbl_household_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_household_members to fetch.
     */
    orderBy?: tbl_household_memberOrderByWithRelationInput | tbl_household_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_household_members.
     */
    cursor?: tbl_household_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_household_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_household_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_household_members.
     */
    distinct?: Tbl_household_memberScalarFieldEnum | Tbl_household_memberScalarFieldEnum[]
  }

  /**
   * tbl_household_member findMany
   */
  export type tbl_household_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * Filter, which tbl_household_members to fetch.
     */
    where?: tbl_household_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_household_members to fetch.
     */
    orderBy?: tbl_household_memberOrderByWithRelationInput | tbl_household_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_household_members.
     */
    cursor?: tbl_household_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_household_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_household_members.
     */
    skip?: number
    distinct?: Tbl_household_memberScalarFieldEnum | Tbl_household_memberScalarFieldEnum[]
  }

  /**
   * tbl_household_member create
   */
  export type tbl_household_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_household_member.
     */
    data: XOR<tbl_household_memberCreateInput, tbl_household_memberUncheckedCreateInput>
  }

  /**
   * tbl_household_member createMany
   */
  export type tbl_household_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_household_members.
     */
    data: tbl_household_memberCreateManyInput | tbl_household_memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_household_member update
   */
  export type tbl_household_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_household_member.
     */
    data: XOR<tbl_household_memberUpdateInput, tbl_household_memberUncheckedUpdateInput>
    /**
     * Choose, which tbl_household_member to update.
     */
    where: tbl_household_memberWhereUniqueInput
  }

  /**
   * tbl_household_member updateMany
   */
  export type tbl_household_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_household_members.
     */
    data: XOR<tbl_household_memberUpdateManyMutationInput, tbl_household_memberUncheckedUpdateManyInput>
    /**
     * Filter which tbl_household_members to update
     */
    where?: tbl_household_memberWhereInput
    /**
     * Limit how many tbl_household_members to update.
     */
    limit?: number
  }

  /**
   * tbl_household_member upsert
   */
  export type tbl_household_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_household_member to update in case it exists.
     */
    where: tbl_household_memberWhereUniqueInput
    /**
     * In case the tbl_household_member found by the `where` argument doesn't exist, create a new tbl_household_member with this data.
     */
    create: XOR<tbl_household_memberCreateInput, tbl_household_memberUncheckedCreateInput>
    /**
     * In case the tbl_household_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_household_memberUpdateInput, tbl_household_memberUncheckedUpdateInput>
  }

  /**
   * tbl_household_member delete
   */
  export type tbl_household_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
    /**
     * Filter which tbl_household_member to delete.
     */
    where: tbl_household_memberWhereUniqueInput
  }

  /**
   * tbl_household_member deleteMany
   */
  export type tbl_household_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_household_members to delete
     */
    where?: tbl_household_memberWhereInput
    /**
     * Limit how many tbl_household_members to delete.
     */
    limit?: number
  }

  /**
   * tbl_household_member without action
   */
  export type tbl_household_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_household_member
     */
    select?: tbl_household_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_household_member
     */
    omit?: tbl_household_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_household_memberInclude<ExtArgs> | null
  }


  /**
   * Model tbl_monthly_liability
   */

  export type AggregateTbl_monthly_liability = {
    _count: Tbl_monthly_liabilityCountAggregateOutputType | null
    _avg: Tbl_monthly_liabilityAvgAggregateOutputType | null
    _sum: Tbl_monthly_liabilitySumAggregateOutputType | null
    _min: Tbl_monthly_liabilityMinAggregateOutputType | null
    _max: Tbl_monthly_liabilityMaxAggregateOutputType | null
  }

  export type Tbl_monthly_liabilityAvgAggregateOutputType = {
    id: number | null
    application_id: number | null
  }

  export type Tbl_monthly_liabilitySumAggregateOutputType = {
    id: number | null
    application_id: number | null
  }

  export type Tbl_monthly_liabilityMinAggregateOutputType = {
    id: number | null
    application_id: number | null
    payee: string | null
    amount: string | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_monthly_liabilityMaxAggregateOutputType = {
    id: number | null
    application_id: number | null
    payee: string | null
    amount: string | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Tbl_monthly_liabilityCountAggregateOutputType = {
    id: number
    application_id: number
    payee: number
    amount: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Tbl_monthly_liabilityAvgAggregateInputType = {
    id?: true
    application_id?: true
  }

  export type Tbl_monthly_liabilitySumAggregateInputType = {
    id?: true
    application_id?: true
  }

  export type Tbl_monthly_liabilityMinAggregateInputType = {
    id?: true
    application_id?: true
    payee?: true
    amount?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_monthly_liabilityMaxAggregateInputType = {
    id?: true
    application_id?: true
    payee?: true
    amount?: true
    created_on?: true
    updated_on?: true
  }

  export type Tbl_monthly_liabilityCountAggregateInputType = {
    id?: true
    application_id?: true
    payee?: true
    amount?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Tbl_monthly_liabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_monthly_liability to aggregate.
     */
    where?: tbl_monthly_liabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_monthly_liabilities to fetch.
     */
    orderBy?: tbl_monthly_liabilityOrderByWithRelationInput | tbl_monthly_liabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_monthly_liabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_monthly_liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_monthly_liabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_monthly_liabilities
    **/
    _count?: true | Tbl_monthly_liabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_monthly_liabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_monthly_liabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_monthly_liabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_monthly_liabilityMaxAggregateInputType
  }

  export type GetTbl_monthly_liabilityAggregateType<T extends Tbl_monthly_liabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_monthly_liability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_monthly_liability[P]>
      : GetScalarType<T[P], AggregateTbl_monthly_liability[P]>
  }




  export type tbl_monthly_liabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_monthly_liabilityWhereInput
    orderBy?: tbl_monthly_liabilityOrderByWithAggregationInput | tbl_monthly_liabilityOrderByWithAggregationInput[]
    by: Tbl_monthly_liabilityScalarFieldEnum[] | Tbl_monthly_liabilityScalarFieldEnum
    having?: tbl_monthly_liabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_monthly_liabilityCountAggregateInputType | true
    _avg?: Tbl_monthly_liabilityAvgAggregateInputType
    _sum?: Tbl_monthly_liabilitySumAggregateInputType
    _min?: Tbl_monthly_liabilityMinAggregateInputType
    _max?: Tbl_monthly_liabilityMaxAggregateInputType
  }

  export type Tbl_monthly_liabilityGroupByOutputType = {
    id: number
    application_id: number
    payee: string
    amount: string
    created_on: Date
    updated_on: Date
    _count: Tbl_monthly_liabilityCountAggregateOutputType | null
    _avg: Tbl_monthly_liabilityAvgAggregateOutputType | null
    _sum: Tbl_monthly_liabilitySumAggregateOutputType | null
    _min: Tbl_monthly_liabilityMinAggregateOutputType | null
    _max: Tbl_monthly_liabilityMaxAggregateOutputType | null
  }

  type GetTbl_monthly_liabilityGroupByPayload<T extends tbl_monthly_liabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_monthly_liabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_monthly_liabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_monthly_liabilityGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_monthly_liabilityGroupByOutputType[P]>
        }
      >
    >


  export type tbl_monthly_liabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    application_id?: boolean
    payee?: boolean
    amount?: boolean
    created_on?: boolean
    updated_on?: boolean
    application?: boolean | tbl_home_improvement_applicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_monthly_liability"]>



  export type tbl_monthly_liabilitySelectScalar = {
    id?: boolean
    application_id?: boolean
    payee?: boolean
    amount?: boolean
    created_on?: boolean
    updated_on?: boolean
  }

  export type tbl_monthly_liabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "application_id" | "payee" | "amount" | "created_on" | "updated_on", ExtArgs["result"]["tbl_monthly_liability"]>
  export type tbl_monthly_liabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | tbl_home_improvement_applicationDefaultArgs<ExtArgs>
  }

  export type $tbl_monthly_liabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_monthly_liability"
    objects: {
      application: Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      application_id: number
      payee: string
      amount: string
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["tbl_monthly_liability"]>
    composites: {}
  }

  type tbl_monthly_liabilityGetPayload<S extends boolean | null | undefined | tbl_monthly_liabilityDefaultArgs> = $Result.GetResult<Prisma.$tbl_monthly_liabilityPayload, S>

  type tbl_monthly_liabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_monthly_liabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_monthly_liabilityCountAggregateInputType | true
    }

  export interface tbl_monthly_liabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_monthly_liability'], meta: { name: 'tbl_monthly_liability' } }
    /**
     * Find zero or one Tbl_monthly_liability that matches the filter.
     * @param {tbl_monthly_liabilityFindUniqueArgs} args - Arguments to find a Tbl_monthly_liability
     * @example
     * // Get one Tbl_monthly_liability
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_monthly_liabilityFindUniqueArgs>(args: SelectSubset<T, tbl_monthly_liabilityFindUniqueArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_monthly_liability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_monthly_liabilityFindUniqueOrThrowArgs} args - Arguments to find a Tbl_monthly_liability
     * @example
     * // Get one Tbl_monthly_liability
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_monthly_liabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_monthly_liabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_monthly_liability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_monthly_liabilityFindFirstArgs} args - Arguments to find a Tbl_monthly_liability
     * @example
     * // Get one Tbl_monthly_liability
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_monthly_liabilityFindFirstArgs>(args?: SelectSubset<T, tbl_monthly_liabilityFindFirstArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_monthly_liability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_monthly_liabilityFindFirstOrThrowArgs} args - Arguments to find a Tbl_monthly_liability
     * @example
     * // Get one Tbl_monthly_liability
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_monthly_liabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_monthly_liabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_monthly_liabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_monthly_liabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_monthly_liabilities
     * const tbl_monthly_liabilities = await prisma.tbl_monthly_liability.findMany()
     * 
     * // Get first 10 Tbl_monthly_liabilities
     * const tbl_monthly_liabilities = await prisma.tbl_monthly_liability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_monthly_liabilityWithIdOnly = await prisma.tbl_monthly_liability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_monthly_liabilityFindManyArgs>(args?: SelectSubset<T, tbl_monthly_liabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_monthly_liability.
     * @param {tbl_monthly_liabilityCreateArgs} args - Arguments to create a Tbl_monthly_liability.
     * @example
     * // Create one Tbl_monthly_liability
     * const Tbl_monthly_liability = await prisma.tbl_monthly_liability.create({
     *   data: {
     *     // ... data to create a Tbl_monthly_liability
     *   }
     * })
     * 
     */
    create<T extends tbl_monthly_liabilityCreateArgs>(args: SelectSubset<T, tbl_monthly_liabilityCreateArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_monthly_liabilities.
     * @param {tbl_monthly_liabilityCreateManyArgs} args - Arguments to create many Tbl_monthly_liabilities.
     * @example
     * // Create many Tbl_monthly_liabilities
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_monthly_liabilityCreateManyArgs>(args?: SelectSubset<T, tbl_monthly_liabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_monthly_liability.
     * @param {tbl_monthly_liabilityDeleteArgs} args - Arguments to delete one Tbl_monthly_liability.
     * @example
     * // Delete one Tbl_monthly_liability
     * const Tbl_monthly_liability = await prisma.tbl_monthly_liability.delete({
     *   where: {
     *     // ... filter to delete one Tbl_monthly_liability
     *   }
     * })
     * 
     */
    delete<T extends tbl_monthly_liabilityDeleteArgs>(args: SelectSubset<T, tbl_monthly_liabilityDeleteArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_monthly_liability.
     * @param {tbl_monthly_liabilityUpdateArgs} args - Arguments to update one Tbl_monthly_liability.
     * @example
     * // Update one Tbl_monthly_liability
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_monthly_liabilityUpdateArgs>(args: SelectSubset<T, tbl_monthly_liabilityUpdateArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_monthly_liabilities.
     * @param {tbl_monthly_liabilityDeleteManyArgs} args - Arguments to filter Tbl_monthly_liabilities to delete.
     * @example
     * // Delete a few Tbl_monthly_liabilities
     * const { count } = await prisma.tbl_monthly_liability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_monthly_liabilityDeleteManyArgs>(args?: SelectSubset<T, tbl_monthly_liabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_monthly_liabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_monthly_liabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_monthly_liabilities
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_monthly_liabilityUpdateManyArgs>(args: SelectSubset<T, tbl_monthly_liabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_monthly_liability.
     * @param {tbl_monthly_liabilityUpsertArgs} args - Arguments to update or create a Tbl_monthly_liability.
     * @example
     * // Update or create a Tbl_monthly_liability
     * const tbl_monthly_liability = await prisma.tbl_monthly_liability.upsert({
     *   create: {
     *     // ... data to create a Tbl_monthly_liability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_monthly_liability we want to update
     *   }
     * })
     */
    upsert<T extends tbl_monthly_liabilityUpsertArgs>(args: SelectSubset<T, tbl_monthly_liabilityUpsertArgs<ExtArgs>>): Prisma__tbl_monthly_liabilityClient<$Result.GetResult<Prisma.$tbl_monthly_liabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_monthly_liabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_monthly_liabilityCountArgs} args - Arguments to filter Tbl_monthly_liabilities to count.
     * @example
     * // Count the number of Tbl_monthly_liabilities
     * const count = await prisma.tbl_monthly_liability.count({
     *   where: {
     *     // ... the filter for the Tbl_monthly_liabilities we want to count
     *   }
     * })
    **/
    count<T extends tbl_monthly_liabilityCountArgs>(
      args?: Subset<T, tbl_monthly_liabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_monthly_liabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_monthly_liability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_monthly_liabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_monthly_liabilityAggregateArgs>(args: Subset<T, Tbl_monthly_liabilityAggregateArgs>): Prisma.PrismaPromise<GetTbl_monthly_liabilityAggregateType<T>>

    /**
     * Group by Tbl_monthly_liability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_monthly_liabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_monthly_liabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_monthly_liabilityGroupByArgs['orderBy'] }
        : { orderBy?: tbl_monthly_liabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_monthly_liabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_monthly_liabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_monthly_liability model
   */
  readonly fields: tbl_monthly_liabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_monthly_liability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_monthly_liabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends tbl_home_improvement_applicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_home_improvement_applicationDefaultArgs<ExtArgs>>): Prisma__tbl_home_improvement_applicationClient<$Result.GetResult<Prisma.$tbl_home_improvement_applicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_monthly_liability model
   */
  interface tbl_monthly_liabilityFieldRefs {
    readonly id: FieldRef<"tbl_monthly_liability", 'Int'>
    readonly application_id: FieldRef<"tbl_monthly_liability", 'Int'>
    readonly payee: FieldRef<"tbl_monthly_liability", 'String'>
    readonly amount: FieldRef<"tbl_monthly_liability", 'String'>
    readonly created_on: FieldRef<"tbl_monthly_liability", 'DateTime'>
    readonly updated_on: FieldRef<"tbl_monthly_liability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_monthly_liability findUnique
   */
  export type tbl_monthly_liabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * Filter, which tbl_monthly_liability to fetch.
     */
    where: tbl_monthly_liabilityWhereUniqueInput
  }

  /**
   * tbl_monthly_liability findUniqueOrThrow
   */
  export type tbl_monthly_liabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * Filter, which tbl_monthly_liability to fetch.
     */
    where: tbl_monthly_liabilityWhereUniqueInput
  }

  /**
   * tbl_monthly_liability findFirst
   */
  export type tbl_monthly_liabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * Filter, which tbl_monthly_liability to fetch.
     */
    where?: tbl_monthly_liabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_monthly_liabilities to fetch.
     */
    orderBy?: tbl_monthly_liabilityOrderByWithRelationInput | tbl_monthly_liabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_monthly_liabilities.
     */
    cursor?: tbl_monthly_liabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_monthly_liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_monthly_liabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_monthly_liabilities.
     */
    distinct?: Tbl_monthly_liabilityScalarFieldEnum | Tbl_monthly_liabilityScalarFieldEnum[]
  }

  /**
   * tbl_monthly_liability findFirstOrThrow
   */
  export type tbl_monthly_liabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * Filter, which tbl_monthly_liability to fetch.
     */
    where?: tbl_monthly_liabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_monthly_liabilities to fetch.
     */
    orderBy?: tbl_monthly_liabilityOrderByWithRelationInput | tbl_monthly_liabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_monthly_liabilities.
     */
    cursor?: tbl_monthly_liabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_monthly_liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_monthly_liabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_monthly_liabilities.
     */
    distinct?: Tbl_monthly_liabilityScalarFieldEnum | Tbl_monthly_liabilityScalarFieldEnum[]
  }

  /**
   * tbl_monthly_liability findMany
   */
  export type tbl_monthly_liabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * Filter, which tbl_monthly_liabilities to fetch.
     */
    where?: tbl_monthly_liabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_monthly_liabilities to fetch.
     */
    orderBy?: tbl_monthly_liabilityOrderByWithRelationInput | tbl_monthly_liabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_monthly_liabilities.
     */
    cursor?: tbl_monthly_liabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_monthly_liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_monthly_liabilities.
     */
    skip?: number
    distinct?: Tbl_monthly_liabilityScalarFieldEnum | Tbl_monthly_liabilityScalarFieldEnum[]
  }

  /**
   * tbl_monthly_liability create
   */
  export type tbl_monthly_liabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_monthly_liability.
     */
    data: XOR<tbl_monthly_liabilityCreateInput, tbl_monthly_liabilityUncheckedCreateInput>
  }

  /**
   * tbl_monthly_liability createMany
   */
  export type tbl_monthly_liabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_monthly_liabilities.
     */
    data: tbl_monthly_liabilityCreateManyInput | tbl_monthly_liabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_monthly_liability update
   */
  export type tbl_monthly_liabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_monthly_liability.
     */
    data: XOR<tbl_monthly_liabilityUpdateInput, tbl_monthly_liabilityUncheckedUpdateInput>
    /**
     * Choose, which tbl_monthly_liability to update.
     */
    where: tbl_monthly_liabilityWhereUniqueInput
  }

  /**
   * tbl_monthly_liability updateMany
   */
  export type tbl_monthly_liabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_monthly_liabilities.
     */
    data: XOR<tbl_monthly_liabilityUpdateManyMutationInput, tbl_monthly_liabilityUncheckedUpdateManyInput>
    /**
     * Filter which tbl_monthly_liabilities to update
     */
    where?: tbl_monthly_liabilityWhereInput
    /**
     * Limit how many tbl_monthly_liabilities to update.
     */
    limit?: number
  }

  /**
   * tbl_monthly_liability upsert
   */
  export type tbl_monthly_liabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_monthly_liability to update in case it exists.
     */
    where: tbl_monthly_liabilityWhereUniqueInput
    /**
     * In case the tbl_monthly_liability found by the `where` argument doesn't exist, create a new tbl_monthly_liability with this data.
     */
    create: XOR<tbl_monthly_liabilityCreateInput, tbl_monthly_liabilityUncheckedCreateInput>
    /**
     * In case the tbl_monthly_liability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_monthly_liabilityUpdateInput, tbl_monthly_liabilityUncheckedUpdateInput>
  }

  /**
   * tbl_monthly_liability delete
   */
  export type tbl_monthly_liabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
    /**
     * Filter which tbl_monthly_liability to delete.
     */
    where: tbl_monthly_liabilityWhereUniqueInput
  }

  /**
   * tbl_monthly_liability deleteMany
   */
  export type tbl_monthly_liabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_monthly_liabilities to delete
     */
    where?: tbl_monthly_liabilityWhereInput
    /**
     * Limit how many tbl_monthly_liabilities to delete.
     */
    limit?: number
  }

  /**
   * tbl_monthly_liability without action
   */
  export type tbl_monthly_liabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_monthly_liability
     */
    select?: tbl_monthly_liabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_monthly_liability
     */
    omit?: tbl_monthly_liabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_monthly_liabilityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    contact: 'contact',
    otp: 'otp',
    otp_expires_at: 'otp_expires_at',
    department_id: 'department_id',
    designation_id: 'designation_id',
    image: 'image',
    password: 'password',
    role: 'role',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Tbl_designation_masterScalarFieldEnum: {
    id: 'id',
    designation_name: 'designation_name',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_designation_masterScalarFieldEnum = (typeof Tbl_designation_masterScalarFieldEnum)[keyof typeof Tbl_designation_masterScalarFieldEnum]


  export const Tbl_status_masterScalarFieldEnum: {
    id: 'id',
    service_name: 'service_name',
    status_name: 'status_name',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_status_masterScalarFieldEnum = (typeof Tbl_status_masterScalarFieldEnum)[keyof typeof Tbl_status_masterScalarFieldEnum]


  export const Tbl_department_masterScalarFieldEnum: {
    id: 'id',
    department_name: 'department_name',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_department_masterScalarFieldEnum = (typeof Tbl_department_masterScalarFieldEnum)[keyof typeof Tbl_department_masterScalarFieldEnum]


  export const BlogCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    is_deleted: 'is_deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    meta_url: 'meta_url',
    meta_keyword: 'meta_keyword',
    author: 'author',
    tag: 'tag',
    meta_description: 'meta_description',
    category_id: 'category_id',
    blog_image: 'blog_image',
    short_description: 'short_description',
    blog_content: 'blog_content',
    status: 'status',
    is_deleted: 'is_deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const Tbl_press_releaseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    meta_url: 'meta_url',
    meta_keyword: 'meta_keyword',
    author: 'author',
    tag: 'tag',
    meta_description: 'meta_description',
    press_release_image: 'press_release_image',
    short_description: 'short_description',
    press_release_content: 'press_release_content',
    status: 'status',
    is_deleted: 'is_deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Tbl_press_releaseScalarFieldEnum = (typeof Tbl_press_releaseScalarFieldEnum)[keyof typeof Tbl_press_releaseScalarFieldEnum]


  export const Tbl_faqScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_faqScalarFieldEnum = (typeof Tbl_faqScalarFieldEnum)[keyof typeof Tbl_faqScalarFieldEnum]


  export const Tbl_contact_usScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_contact_usScalarFieldEnum = (typeof Tbl_contact_usScalarFieldEnum)[keyof typeof Tbl_contact_usScalarFieldEnum]


  export const Tbl_our_teamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    designation_id: 'designation_id',
    our_team_image: 'our_team_image',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_our_teamScalarFieldEnum = (typeof Tbl_our_teamScalarFieldEnum)[keyof typeof Tbl_our_teamScalarFieldEnum]


  export const Tbl_success_storyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    organization: 'organization',
    sucess_story_image: 'sucess_story_image',
    content: 'content',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_success_storyScalarFieldEnum = (typeof Tbl_success_storyScalarFieldEnum)[keyof typeof Tbl_success_storyScalarFieldEnum]


  export const Tbl_home_improvement_applicationScalarFieldEnum: {
    id: 'id',
    application_no: 'application_no',
    application_type: 'application_type',
    active_step: 'active_step',
    is_draft: 'is_draft',
    applicant_name: 'applicant_name',
    applicant_property: 'applicant_property',
    reside_address: 'reside_address',
    email: 'email',
    phone_home: 'phone_home',
    phone_work: 'phone_work',
    phone_cell: 'phone_cell',
    applicant_employer_name: 'applicant_employer_name',
    applicant_employer_address: 'applicant_employer_address',
    coapplicant_employer_name: 'coapplicant_employer_name',
    coapplicant_employer_address: 'coapplicant_employer_address',
    has_mortgage: 'has_mortgage',
    mortgagee: 'mortgagee',
    mortgage_amount: 'mortgage_amount',
    mortgage_balance: 'mortgage_balance',
    gross_annual_income: 'gross_annual_income',
    monthly_liabilities_total: 'monthly_liabilities_total',
    property_owned_duration: 'property_owned_duration',
    number_of_units: 'number_of_units',
    taxes_paid: 'taxes_paid',
    payment_status: 'payment_status',
    total_persons: 'total_persons',
    children_under_18: 'children_under_18',
    renovation_details: 'renovation_details',
    maintenance_plumbing: 'maintenance_plumbing',
    maintenance_electrical: 'maintenance_electrical',
    maintenance_heating_cooling: 'maintenance_heating_cooling',
    maintenance_appliances: 'maintenance_appliances',
    maintenance_doors_windows: 'maintenance_doors_windows',
    maintenance_flooring_walls: 'maintenance_flooring_walls',
    maintenance_safety: 'maintenance_safety',
    maintenance_pest: 'maintenance_pest',
    maintenance_other_text: 'maintenance_other_text',
    certification_signer_name: 'certification_signer_name',
    certification_signature: 'certification_signature',
    certification_datetime: 'certification_datetime',
    status: 'status',
    is_deleted: 'is_deleted',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_home_improvement_applicationScalarFieldEnum = (typeof Tbl_home_improvement_applicationScalarFieldEnum)[keyof typeof Tbl_home_improvement_applicationScalarFieldEnum]


  export const Tbl_household_memberScalarFieldEnum: {
    id: 'id',
    application_id: 'application_id',
    name: 'name',
    age: 'age',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_household_memberScalarFieldEnum = (typeof Tbl_household_memberScalarFieldEnum)[keyof typeof Tbl_household_memberScalarFieldEnum]


  export const Tbl_monthly_liabilityScalarFieldEnum: {
    id: 'id',
    application_id: 'application_id',
    payee: 'payee',
    amount: 'amount',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Tbl_monthly_liabilityScalarFieldEnum = (typeof Tbl_monthly_liabilityScalarFieldEnum)[keyof typeof Tbl_monthly_liabilityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    contact: 'contact',
    otp: 'otp',
    image: 'image',
    password: 'password',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const tbl_designation_masterOrderByRelevanceFieldEnum: {
    designation_name: 'designation_name'
  };

  export type tbl_designation_masterOrderByRelevanceFieldEnum = (typeof tbl_designation_masterOrderByRelevanceFieldEnum)[keyof typeof tbl_designation_masterOrderByRelevanceFieldEnum]


  export const tbl_status_masterOrderByRelevanceFieldEnum: {
    service_name: 'service_name',
    status_name: 'status_name'
  };

  export type tbl_status_masterOrderByRelevanceFieldEnum = (typeof tbl_status_masterOrderByRelevanceFieldEnum)[keyof typeof tbl_status_masterOrderByRelevanceFieldEnum]


  export const tbl_department_masterOrderByRelevanceFieldEnum: {
    department_name: 'department_name'
  };

  export type tbl_department_masterOrderByRelevanceFieldEnum = (typeof tbl_department_masterOrderByRelevanceFieldEnum)[keyof typeof tbl_department_masterOrderByRelevanceFieldEnum]


  export const BlogCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type BlogCategoryOrderByRelevanceFieldEnum = (typeof BlogCategoryOrderByRelevanceFieldEnum)[keyof typeof BlogCategoryOrderByRelevanceFieldEnum]


  export const BlogOrderByRelevanceFieldEnum: {
    title: 'title',
    meta_url: 'meta_url',
    meta_keyword: 'meta_keyword',
    author: 'author',
    tag: 'tag',
    meta_description: 'meta_description',
    blog_image: 'blog_image',
    short_description: 'short_description',
    blog_content: 'blog_content'
  };

  export type BlogOrderByRelevanceFieldEnum = (typeof BlogOrderByRelevanceFieldEnum)[keyof typeof BlogOrderByRelevanceFieldEnum]


  export const tbl_press_releaseOrderByRelevanceFieldEnum: {
    title: 'title',
    meta_url: 'meta_url',
    meta_keyword: 'meta_keyword',
    author: 'author',
    tag: 'tag',
    meta_description: 'meta_description',
    press_release_image: 'press_release_image',
    short_description: 'short_description',
    press_release_content: 'press_release_content'
  };

  export type tbl_press_releaseOrderByRelevanceFieldEnum = (typeof tbl_press_releaseOrderByRelevanceFieldEnum)[keyof typeof tbl_press_releaseOrderByRelevanceFieldEnum]


  export const tbl_faqOrderByRelevanceFieldEnum: {
    question: 'question',
    answer: 'answer'
  };

  export type tbl_faqOrderByRelevanceFieldEnum = (typeof tbl_faqOrderByRelevanceFieldEnum)[keyof typeof tbl_faqOrderByRelevanceFieldEnum]


  export const tbl_contact_usOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message'
  };

  export type tbl_contact_usOrderByRelevanceFieldEnum = (typeof tbl_contact_usOrderByRelevanceFieldEnum)[keyof typeof tbl_contact_usOrderByRelevanceFieldEnum]


  export const tbl_our_teamOrderByRelevanceFieldEnum: {
    name: 'name',
    our_team_image: 'our_team_image'
  };

  export type tbl_our_teamOrderByRelevanceFieldEnum = (typeof tbl_our_teamOrderByRelevanceFieldEnum)[keyof typeof tbl_our_teamOrderByRelevanceFieldEnum]


  export const tbl_success_storyOrderByRelevanceFieldEnum: {
    name: 'name',
    organization: 'organization',
    sucess_story_image: 'sucess_story_image',
    content: 'content'
  };

  export type tbl_success_storyOrderByRelevanceFieldEnum = (typeof tbl_success_storyOrderByRelevanceFieldEnum)[keyof typeof tbl_success_storyOrderByRelevanceFieldEnum]


  export const tbl_home_improvement_applicationOrderByRelevanceFieldEnum: {
    application_no: 'application_no',
    application_type: 'application_type',
    applicant_name: 'applicant_name',
    applicant_property: 'applicant_property',
    reside_address: 'reside_address',
    email: 'email',
    phone_home: 'phone_home',
    phone_work: 'phone_work',
    phone_cell: 'phone_cell',
    applicant_employer_name: 'applicant_employer_name',
    applicant_employer_address: 'applicant_employer_address',
    coapplicant_employer_name: 'coapplicant_employer_name',
    coapplicant_employer_address: 'coapplicant_employer_address',
    has_mortgage: 'has_mortgage',
    mortgagee: 'mortgagee',
    mortgage_amount: 'mortgage_amount',
    mortgage_balance: 'mortgage_balance',
    gross_annual_income: 'gross_annual_income',
    monthly_liabilities_total: 'monthly_liabilities_total',
    property_owned_duration: 'property_owned_duration',
    number_of_units: 'number_of_units',
    taxes_paid: 'taxes_paid',
    payment_status: 'payment_status',
    total_persons: 'total_persons',
    children_under_18: 'children_under_18',
    renovation_details: 'renovation_details',
    maintenance_other_text: 'maintenance_other_text',
    certification_signer_name: 'certification_signer_name',
    certification_signature: 'certification_signature'
  };

  export type tbl_home_improvement_applicationOrderByRelevanceFieldEnum = (typeof tbl_home_improvement_applicationOrderByRelevanceFieldEnum)[keyof typeof tbl_home_improvement_applicationOrderByRelevanceFieldEnum]


  export const tbl_household_memberOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type tbl_household_memberOrderByRelevanceFieldEnum = (typeof tbl_household_memberOrderByRelevanceFieldEnum)[keyof typeof tbl_household_memberOrderByRelevanceFieldEnum]


  export const tbl_monthly_liabilityOrderByRelevanceFieldEnum: {
    payee: 'payee',
    amount: 'amount'
  };

  export type tbl_monthly_liabilityOrderByRelevanceFieldEnum = (typeof tbl_monthly_liabilityOrderByRelevanceFieldEnum)[keyof typeof tbl_monthly_liabilityOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    department_id?: IntNullableFilter<"User"> | number | null
    designation_id?: IntNullableFilter<"User"> | number | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    is_deleted?: IntFilter<"User"> | number
    created_on?: DateTimeFilter<"User"> | Date | string
    updated_on?: DateTimeFilter<"User"> | Date | string
    department?: XOR<Tbl_department_masterNullableScalarRelationFilter, tbl_department_masterWhereInput> | null
    designation?: XOR<Tbl_designation_masterNullableScalarRelationFilter, tbl_designation_masterWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    designation_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    department?: tbl_department_masterOrderByWithRelationInput
    designation?: tbl_designation_masterOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    department_id?: IntNullableFilter<"User"> | number | null
    designation_id?: IntNullableFilter<"User"> | number | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    is_deleted?: IntFilter<"User"> | number
    created_on?: DateTimeFilter<"User"> | Date | string
    updated_on?: DateTimeFilter<"User"> | Date | string
    department?: XOR<Tbl_department_masterNullableScalarRelationFilter, tbl_department_masterWhereInput> | null
    designation?: XOR<Tbl_designation_masterNullableScalarRelationFilter, tbl_designation_masterWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    designation_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    contact?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp_expires_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    department_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    designation_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    status?: IntWithAggregatesFilter<"User"> | number
    is_deleted?: IntWithAggregatesFilter<"User"> | number
    created_on?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type tbl_designation_masterWhereInput = {
    AND?: tbl_designation_masterWhereInput | tbl_designation_masterWhereInput[]
    OR?: tbl_designation_masterWhereInput[]
    NOT?: tbl_designation_masterWhereInput | tbl_designation_masterWhereInput[]
    id?: IntFilter<"tbl_designation_master"> | number
    designation_name?: StringFilter<"tbl_designation_master"> | string
    status?: IntFilter<"tbl_designation_master"> | number
    is_deleted?: IntFilter<"tbl_designation_master"> | number
    created_on?: DateTimeFilter<"tbl_designation_master"> | Date | string
    updated_on?: DateTimeFilter<"tbl_designation_master"> | Date | string
    users?: UserListRelationFilter
    teamMembers?: Tbl_our_teamListRelationFilter
  }

  export type tbl_designation_masterOrderByWithRelationInput = {
    id?: SortOrder
    designation_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    users?: UserOrderByRelationAggregateInput
    teamMembers?: tbl_our_teamOrderByRelationAggregateInput
    _relevance?: tbl_designation_masterOrderByRelevanceInput
  }

  export type tbl_designation_masterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_designation_masterWhereInput | tbl_designation_masterWhereInput[]
    OR?: tbl_designation_masterWhereInput[]
    NOT?: tbl_designation_masterWhereInput | tbl_designation_masterWhereInput[]
    designation_name?: StringFilter<"tbl_designation_master"> | string
    status?: IntFilter<"tbl_designation_master"> | number
    is_deleted?: IntFilter<"tbl_designation_master"> | number
    created_on?: DateTimeFilter<"tbl_designation_master"> | Date | string
    updated_on?: DateTimeFilter<"tbl_designation_master"> | Date | string
    users?: UserListRelationFilter
    teamMembers?: Tbl_our_teamListRelationFilter
  }, "id">

  export type tbl_designation_masterOrderByWithAggregationInput = {
    id?: SortOrder
    designation_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_designation_masterCountOrderByAggregateInput
    _avg?: tbl_designation_masterAvgOrderByAggregateInput
    _max?: tbl_designation_masterMaxOrderByAggregateInput
    _min?: tbl_designation_masterMinOrderByAggregateInput
    _sum?: tbl_designation_masterSumOrderByAggregateInput
  }

  export type tbl_designation_masterScalarWhereWithAggregatesInput = {
    AND?: tbl_designation_masterScalarWhereWithAggregatesInput | tbl_designation_masterScalarWhereWithAggregatesInput[]
    OR?: tbl_designation_masterScalarWhereWithAggregatesInput[]
    NOT?: tbl_designation_masterScalarWhereWithAggregatesInput | tbl_designation_masterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_designation_master"> | number
    designation_name?: StringWithAggregatesFilter<"tbl_designation_master"> | string
    status?: IntWithAggregatesFilter<"tbl_designation_master"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_designation_master"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_designation_master"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_designation_master"> | Date | string
  }

  export type tbl_status_masterWhereInput = {
    AND?: tbl_status_masterWhereInput | tbl_status_masterWhereInput[]
    OR?: tbl_status_masterWhereInput[]
    NOT?: tbl_status_masterWhereInput | tbl_status_masterWhereInput[]
    id?: IntFilter<"tbl_status_master"> | number
    service_name?: StringFilter<"tbl_status_master"> | string
    status_name?: StringFilter<"tbl_status_master"> | string
    status?: IntFilter<"tbl_status_master"> | number
    is_deleted?: IntFilter<"tbl_status_master"> | number
    created_on?: DateTimeFilter<"tbl_status_master"> | Date | string
    updated_on?: DateTimeFilter<"tbl_status_master"> | Date | string
  }

  export type tbl_status_masterOrderByWithRelationInput = {
    id?: SortOrder
    service_name?: SortOrder
    status_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _relevance?: tbl_status_masterOrderByRelevanceInput
  }

  export type tbl_status_masterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_status_masterWhereInput | tbl_status_masterWhereInput[]
    OR?: tbl_status_masterWhereInput[]
    NOT?: tbl_status_masterWhereInput | tbl_status_masterWhereInput[]
    service_name?: StringFilter<"tbl_status_master"> | string
    status_name?: StringFilter<"tbl_status_master"> | string
    status?: IntFilter<"tbl_status_master"> | number
    is_deleted?: IntFilter<"tbl_status_master"> | number
    created_on?: DateTimeFilter<"tbl_status_master"> | Date | string
    updated_on?: DateTimeFilter<"tbl_status_master"> | Date | string
  }, "id">

  export type tbl_status_masterOrderByWithAggregationInput = {
    id?: SortOrder
    service_name?: SortOrder
    status_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_status_masterCountOrderByAggregateInput
    _avg?: tbl_status_masterAvgOrderByAggregateInput
    _max?: tbl_status_masterMaxOrderByAggregateInput
    _min?: tbl_status_masterMinOrderByAggregateInput
    _sum?: tbl_status_masterSumOrderByAggregateInput
  }

  export type tbl_status_masterScalarWhereWithAggregatesInput = {
    AND?: tbl_status_masterScalarWhereWithAggregatesInput | tbl_status_masterScalarWhereWithAggregatesInput[]
    OR?: tbl_status_masterScalarWhereWithAggregatesInput[]
    NOT?: tbl_status_masterScalarWhereWithAggregatesInput | tbl_status_masterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_status_master"> | number
    service_name?: StringWithAggregatesFilter<"tbl_status_master"> | string
    status_name?: StringWithAggregatesFilter<"tbl_status_master"> | string
    status?: IntWithAggregatesFilter<"tbl_status_master"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_status_master"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_status_master"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_status_master"> | Date | string
  }

  export type tbl_department_masterWhereInput = {
    AND?: tbl_department_masterWhereInput | tbl_department_masterWhereInput[]
    OR?: tbl_department_masterWhereInput[]
    NOT?: tbl_department_masterWhereInput | tbl_department_masterWhereInput[]
    id?: IntFilter<"tbl_department_master"> | number
    department_name?: StringFilter<"tbl_department_master"> | string
    status?: IntFilter<"tbl_department_master"> | number
    is_deleted?: IntFilter<"tbl_department_master"> | number
    created_on?: DateTimeFilter<"tbl_department_master"> | Date | string
    updated_on?: DateTimeFilter<"tbl_department_master"> | Date | string
    users?: UserListRelationFilter
  }

  export type tbl_department_masterOrderByWithRelationInput = {
    id?: SortOrder
    department_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: tbl_department_masterOrderByRelevanceInput
  }

  export type tbl_department_masterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_department_masterWhereInput | tbl_department_masterWhereInput[]
    OR?: tbl_department_masterWhereInput[]
    NOT?: tbl_department_masterWhereInput | tbl_department_masterWhereInput[]
    department_name?: StringFilter<"tbl_department_master"> | string
    status?: IntFilter<"tbl_department_master"> | number
    is_deleted?: IntFilter<"tbl_department_master"> | number
    created_on?: DateTimeFilter<"tbl_department_master"> | Date | string
    updated_on?: DateTimeFilter<"tbl_department_master"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type tbl_department_masterOrderByWithAggregationInput = {
    id?: SortOrder
    department_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_department_masterCountOrderByAggregateInput
    _avg?: tbl_department_masterAvgOrderByAggregateInput
    _max?: tbl_department_masterMaxOrderByAggregateInput
    _min?: tbl_department_masterMinOrderByAggregateInput
    _sum?: tbl_department_masterSumOrderByAggregateInput
  }

  export type tbl_department_masterScalarWhereWithAggregatesInput = {
    AND?: tbl_department_masterScalarWhereWithAggregatesInput | tbl_department_masterScalarWhereWithAggregatesInput[]
    OR?: tbl_department_masterScalarWhereWithAggregatesInput[]
    NOT?: tbl_department_masterScalarWhereWithAggregatesInput | tbl_department_masterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_department_master"> | number
    department_name?: StringWithAggregatesFilter<"tbl_department_master"> | string
    status?: IntWithAggregatesFilter<"tbl_department_master"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_department_master"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_department_master"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_department_master"> | Date | string
  }

  export type BlogCategoryWhereInput = {
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    id?: IntFilter<"BlogCategory"> | number
    name?: StringFilter<"BlogCategory"> | string
    status?: IntFilter<"BlogCategory"> | number
    is_deleted?: IntFilter<"BlogCategory"> | number
    createdAt?: DateTimeFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogCategory"> | Date | string
    blogs?: BlogListRelationFilter
  }

  export type BlogCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
    _relevance?: BlogCategoryOrderByRelevanceInput
  }

  export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    name?: StringFilter<"BlogCategory"> | string
    status?: IntFilter<"BlogCategory"> | number
    is_deleted?: IntFilter<"BlogCategory"> | number
    createdAt?: DateTimeFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogCategory"> | Date | string
    blogs?: BlogListRelationFilter
  }, "id">

  export type BlogCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCategoryCountOrderByAggregateInput
    _avg?: BlogCategoryAvgOrderByAggregateInput
    _max?: BlogCategoryMaxOrderByAggregateInput
    _min?: BlogCategoryMinOrderByAggregateInput
    _sum?: BlogCategorySumOrderByAggregateInput
  }

  export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlogCategory"> | number
    name?: StringWithAggregatesFilter<"BlogCategory"> | string
    status?: IntWithAggregatesFilter<"BlogCategory"> | number
    is_deleted?: IntWithAggregatesFilter<"BlogCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogCategory"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    meta_url?: StringFilter<"Blog"> | string
    meta_keyword?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    tag?: StringFilter<"Blog"> | string
    meta_description?: StringNullableFilter<"Blog"> | string | null
    category_id?: IntFilter<"Blog"> | number
    blog_image?: StringNullableFilter<"Blog"> | string | null
    short_description?: StringFilter<"Blog"> | string
    blog_content?: StringFilter<"Blog"> | string
    status?: IntFilter<"Blog"> | number
    is_deleted?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    category?: XOR<BlogCategoryScalarRelationFilter, BlogCategoryWhereInput>
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrderInput | SortOrder
    category_id?: SortOrder
    blog_image?: SortOrderInput | SortOrder
    short_description?: SortOrder
    blog_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: BlogCategoryOrderByWithRelationInput
    _relevance?: BlogOrderByRelevanceInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    meta_url?: StringFilter<"Blog"> | string
    meta_keyword?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    tag?: StringFilter<"Blog"> | string
    meta_description?: StringNullableFilter<"Blog"> | string | null
    category_id?: IntFilter<"Blog"> | number
    blog_image?: StringNullableFilter<"Blog"> | string | null
    short_description?: StringFilter<"Blog"> | string
    blog_content?: StringFilter<"Blog"> | string
    status?: IntFilter<"Blog"> | number
    is_deleted?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    category?: XOR<BlogCategoryScalarRelationFilter, BlogCategoryWhereInput>
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrderInput | SortOrder
    category_id?: SortOrder
    blog_image?: SortOrderInput | SortOrder
    short_description?: SortOrder
    blog_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    meta_url?: StringWithAggregatesFilter<"Blog"> | string
    meta_keyword?: StringWithAggregatesFilter<"Blog"> | string
    author?: StringWithAggregatesFilter<"Blog"> | string
    tag?: StringWithAggregatesFilter<"Blog"> | string
    meta_description?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    category_id?: IntWithAggregatesFilter<"Blog"> | number
    blog_image?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    short_description?: StringWithAggregatesFilter<"Blog"> | string
    blog_content?: StringWithAggregatesFilter<"Blog"> | string
    status?: IntWithAggregatesFilter<"Blog"> | number
    is_deleted?: IntWithAggregatesFilter<"Blog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type tbl_press_releaseWhereInput = {
    AND?: tbl_press_releaseWhereInput | tbl_press_releaseWhereInput[]
    OR?: tbl_press_releaseWhereInput[]
    NOT?: tbl_press_releaseWhereInput | tbl_press_releaseWhereInput[]
    id?: IntFilter<"tbl_press_release"> | number
    title?: StringFilter<"tbl_press_release"> | string
    meta_url?: StringFilter<"tbl_press_release"> | string
    meta_keyword?: StringFilter<"tbl_press_release"> | string
    author?: StringFilter<"tbl_press_release"> | string
    tag?: StringFilter<"tbl_press_release"> | string
    meta_description?: StringNullableFilter<"tbl_press_release"> | string | null
    press_release_image?: StringNullableFilter<"tbl_press_release"> | string | null
    short_description?: StringFilter<"tbl_press_release"> | string
    press_release_content?: StringFilter<"tbl_press_release"> | string
    status?: IntFilter<"tbl_press_release"> | number
    is_deleted?: IntFilter<"tbl_press_release"> | number
    createdAt?: DateTimeFilter<"tbl_press_release"> | Date | string
    updatedAt?: DateTimeFilter<"tbl_press_release"> | Date | string
  }

  export type tbl_press_releaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrderInput | SortOrder
    press_release_image?: SortOrderInput | SortOrder
    short_description?: SortOrder
    press_release_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: tbl_press_releaseOrderByRelevanceInput
  }

  export type tbl_press_releaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_press_releaseWhereInput | tbl_press_releaseWhereInput[]
    OR?: tbl_press_releaseWhereInput[]
    NOT?: tbl_press_releaseWhereInput | tbl_press_releaseWhereInput[]
    title?: StringFilter<"tbl_press_release"> | string
    meta_url?: StringFilter<"tbl_press_release"> | string
    meta_keyword?: StringFilter<"tbl_press_release"> | string
    author?: StringFilter<"tbl_press_release"> | string
    tag?: StringFilter<"tbl_press_release"> | string
    meta_description?: StringNullableFilter<"tbl_press_release"> | string | null
    press_release_image?: StringNullableFilter<"tbl_press_release"> | string | null
    short_description?: StringFilter<"tbl_press_release"> | string
    press_release_content?: StringFilter<"tbl_press_release"> | string
    status?: IntFilter<"tbl_press_release"> | number
    is_deleted?: IntFilter<"tbl_press_release"> | number
    createdAt?: DateTimeFilter<"tbl_press_release"> | Date | string
    updatedAt?: DateTimeFilter<"tbl_press_release"> | Date | string
  }, "id">

  export type tbl_press_releaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrderInput | SortOrder
    press_release_image?: SortOrderInput | SortOrder
    short_description?: SortOrder
    press_release_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tbl_press_releaseCountOrderByAggregateInput
    _avg?: tbl_press_releaseAvgOrderByAggregateInput
    _max?: tbl_press_releaseMaxOrderByAggregateInput
    _min?: tbl_press_releaseMinOrderByAggregateInput
    _sum?: tbl_press_releaseSumOrderByAggregateInput
  }

  export type tbl_press_releaseScalarWhereWithAggregatesInput = {
    AND?: tbl_press_releaseScalarWhereWithAggregatesInput | tbl_press_releaseScalarWhereWithAggregatesInput[]
    OR?: tbl_press_releaseScalarWhereWithAggregatesInput[]
    NOT?: tbl_press_releaseScalarWhereWithAggregatesInput | tbl_press_releaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_press_release"> | number
    title?: StringWithAggregatesFilter<"tbl_press_release"> | string
    meta_url?: StringWithAggregatesFilter<"tbl_press_release"> | string
    meta_keyword?: StringWithAggregatesFilter<"tbl_press_release"> | string
    author?: StringWithAggregatesFilter<"tbl_press_release"> | string
    tag?: StringWithAggregatesFilter<"tbl_press_release"> | string
    meta_description?: StringNullableWithAggregatesFilter<"tbl_press_release"> | string | null
    press_release_image?: StringNullableWithAggregatesFilter<"tbl_press_release"> | string | null
    short_description?: StringWithAggregatesFilter<"tbl_press_release"> | string
    press_release_content?: StringWithAggregatesFilter<"tbl_press_release"> | string
    status?: IntWithAggregatesFilter<"tbl_press_release"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_press_release"> | number
    createdAt?: DateTimeWithAggregatesFilter<"tbl_press_release"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tbl_press_release"> | Date | string
  }

  export type tbl_faqWhereInput = {
    AND?: tbl_faqWhereInput | tbl_faqWhereInput[]
    OR?: tbl_faqWhereInput[]
    NOT?: tbl_faqWhereInput | tbl_faqWhereInput[]
    id?: IntFilter<"tbl_faq"> | number
    question?: StringFilter<"tbl_faq"> | string
    answer?: StringFilter<"tbl_faq"> | string
    status?: IntFilter<"tbl_faq"> | number
    is_deleted?: IntFilter<"tbl_faq"> | number
    created_on?: DateTimeFilter<"tbl_faq"> | Date | string
    updated_on?: DateTimeFilter<"tbl_faq"> | Date | string
  }

  export type tbl_faqOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _relevance?: tbl_faqOrderByRelevanceInput
  }

  export type tbl_faqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_faqWhereInput | tbl_faqWhereInput[]
    OR?: tbl_faqWhereInput[]
    NOT?: tbl_faqWhereInput | tbl_faqWhereInput[]
    question?: StringFilter<"tbl_faq"> | string
    answer?: StringFilter<"tbl_faq"> | string
    status?: IntFilter<"tbl_faq"> | number
    is_deleted?: IntFilter<"tbl_faq"> | number
    created_on?: DateTimeFilter<"tbl_faq"> | Date | string
    updated_on?: DateTimeFilter<"tbl_faq"> | Date | string
  }, "id">

  export type tbl_faqOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_faqCountOrderByAggregateInput
    _avg?: tbl_faqAvgOrderByAggregateInput
    _max?: tbl_faqMaxOrderByAggregateInput
    _min?: tbl_faqMinOrderByAggregateInput
    _sum?: tbl_faqSumOrderByAggregateInput
  }

  export type tbl_faqScalarWhereWithAggregatesInput = {
    AND?: tbl_faqScalarWhereWithAggregatesInput | tbl_faqScalarWhereWithAggregatesInput[]
    OR?: tbl_faqScalarWhereWithAggregatesInput[]
    NOT?: tbl_faqScalarWhereWithAggregatesInput | tbl_faqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_faq"> | number
    question?: StringWithAggregatesFilter<"tbl_faq"> | string
    answer?: StringWithAggregatesFilter<"tbl_faq"> | string
    status?: IntWithAggregatesFilter<"tbl_faq"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_faq"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_faq"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_faq"> | Date | string
  }

  export type tbl_contact_usWhereInput = {
    AND?: tbl_contact_usWhereInput | tbl_contact_usWhereInput[]
    OR?: tbl_contact_usWhereInput[]
    NOT?: tbl_contact_usWhereInput | tbl_contact_usWhereInput[]
    id?: IntFilter<"tbl_contact_us"> | number
    name?: StringFilter<"tbl_contact_us"> | string
    email?: StringFilter<"tbl_contact_us"> | string
    phone?: StringFilter<"tbl_contact_us"> | string
    message?: StringFilter<"tbl_contact_us"> | string
    status?: IntFilter<"tbl_contact_us"> | number
    is_deleted?: IntFilter<"tbl_contact_us"> | number
    created_on?: DateTimeFilter<"tbl_contact_us"> | Date | string
    updated_on?: DateTimeFilter<"tbl_contact_us"> | Date | string
  }

  export type tbl_contact_usOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _relevance?: tbl_contact_usOrderByRelevanceInput
  }

  export type tbl_contact_usWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_contact_usWhereInput | tbl_contact_usWhereInput[]
    OR?: tbl_contact_usWhereInput[]
    NOT?: tbl_contact_usWhereInput | tbl_contact_usWhereInput[]
    name?: StringFilter<"tbl_contact_us"> | string
    email?: StringFilter<"tbl_contact_us"> | string
    phone?: StringFilter<"tbl_contact_us"> | string
    message?: StringFilter<"tbl_contact_us"> | string
    status?: IntFilter<"tbl_contact_us"> | number
    is_deleted?: IntFilter<"tbl_contact_us"> | number
    created_on?: DateTimeFilter<"tbl_contact_us"> | Date | string
    updated_on?: DateTimeFilter<"tbl_contact_us"> | Date | string
  }, "id">

  export type tbl_contact_usOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_contact_usCountOrderByAggregateInput
    _avg?: tbl_contact_usAvgOrderByAggregateInput
    _max?: tbl_contact_usMaxOrderByAggregateInput
    _min?: tbl_contact_usMinOrderByAggregateInput
    _sum?: tbl_contact_usSumOrderByAggregateInput
  }

  export type tbl_contact_usScalarWhereWithAggregatesInput = {
    AND?: tbl_contact_usScalarWhereWithAggregatesInput | tbl_contact_usScalarWhereWithAggregatesInput[]
    OR?: tbl_contact_usScalarWhereWithAggregatesInput[]
    NOT?: tbl_contact_usScalarWhereWithAggregatesInput | tbl_contact_usScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_contact_us"> | number
    name?: StringWithAggregatesFilter<"tbl_contact_us"> | string
    email?: StringWithAggregatesFilter<"tbl_contact_us"> | string
    phone?: StringWithAggregatesFilter<"tbl_contact_us"> | string
    message?: StringWithAggregatesFilter<"tbl_contact_us"> | string
    status?: IntWithAggregatesFilter<"tbl_contact_us"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_contact_us"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_contact_us"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_contact_us"> | Date | string
  }

  export type tbl_our_teamWhereInput = {
    AND?: tbl_our_teamWhereInput | tbl_our_teamWhereInput[]
    OR?: tbl_our_teamWhereInput[]
    NOT?: tbl_our_teamWhereInput | tbl_our_teamWhereInput[]
    id?: IntFilter<"tbl_our_team"> | number
    name?: StringFilter<"tbl_our_team"> | string
    designation_id?: IntNullableFilter<"tbl_our_team"> | number | null
    our_team_image?: StringNullableFilter<"tbl_our_team"> | string | null
    status?: IntFilter<"tbl_our_team"> | number
    is_deleted?: IntFilter<"tbl_our_team"> | number
    created_on?: DateTimeFilter<"tbl_our_team"> | Date | string
    updated_on?: DateTimeFilter<"tbl_our_team"> | Date | string
    designation?: XOR<Tbl_designation_masterNullableScalarRelationFilter, tbl_designation_masterWhereInput> | null
  }

  export type tbl_our_teamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    designation_id?: SortOrderInput | SortOrder
    our_team_image?: SortOrderInput | SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    designation?: tbl_designation_masterOrderByWithRelationInput
    _relevance?: tbl_our_teamOrderByRelevanceInput
  }

  export type tbl_our_teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_our_teamWhereInput | tbl_our_teamWhereInput[]
    OR?: tbl_our_teamWhereInput[]
    NOT?: tbl_our_teamWhereInput | tbl_our_teamWhereInput[]
    name?: StringFilter<"tbl_our_team"> | string
    designation_id?: IntNullableFilter<"tbl_our_team"> | number | null
    our_team_image?: StringNullableFilter<"tbl_our_team"> | string | null
    status?: IntFilter<"tbl_our_team"> | number
    is_deleted?: IntFilter<"tbl_our_team"> | number
    created_on?: DateTimeFilter<"tbl_our_team"> | Date | string
    updated_on?: DateTimeFilter<"tbl_our_team"> | Date | string
    designation?: XOR<Tbl_designation_masterNullableScalarRelationFilter, tbl_designation_masterWhereInput> | null
  }, "id">

  export type tbl_our_teamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    designation_id?: SortOrderInput | SortOrder
    our_team_image?: SortOrderInput | SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_our_teamCountOrderByAggregateInput
    _avg?: tbl_our_teamAvgOrderByAggregateInput
    _max?: tbl_our_teamMaxOrderByAggregateInput
    _min?: tbl_our_teamMinOrderByAggregateInput
    _sum?: tbl_our_teamSumOrderByAggregateInput
  }

  export type tbl_our_teamScalarWhereWithAggregatesInput = {
    AND?: tbl_our_teamScalarWhereWithAggregatesInput | tbl_our_teamScalarWhereWithAggregatesInput[]
    OR?: tbl_our_teamScalarWhereWithAggregatesInput[]
    NOT?: tbl_our_teamScalarWhereWithAggregatesInput | tbl_our_teamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_our_team"> | number
    name?: StringWithAggregatesFilter<"tbl_our_team"> | string
    designation_id?: IntNullableWithAggregatesFilter<"tbl_our_team"> | number | null
    our_team_image?: StringNullableWithAggregatesFilter<"tbl_our_team"> | string | null
    status?: IntWithAggregatesFilter<"tbl_our_team"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_our_team"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_our_team"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_our_team"> | Date | string
  }

  export type tbl_success_storyWhereInput = {
    AND?: tbl_success_storyWhereInput | tbl_success_storyWhereInput[]
    OR?: tbl_success_storyWhereInput[]
    NOT?: tbl_success_storyWhereInput | tbl_success_storyWhereInput[]
    id?: IntFilter<"tbl_success_story"> | number
    name?: StringFilter<"tbl_success_story"> | string
    organization?: StringNullableFilter<"tbl_success_story"> | string | null
    sucess_story_image?: StringNullableFilter<"tbl_success_story"> | string | null
    content?: StringFilter<"tbl_success_story"> | string
    status?: IntFilter<"tbl_success_story"> | number
    is_deleted?: IntFilter<"tbl_success_story"> | number
    created_on?: DateTimeFilter<"tbl_success_story"> | Date | string
    updated_on?: DateTimeFilter<"tbl_success_story"> | Date | string
  }

  export type tbl_success_storyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    organization?: SortOrderInput | SortOrder
    sucess_story_image?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _relevance?: tbl_success_storyOrderByRelevanceInput
  }

  export type tbl_success_storyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_success_storyWhereInput | tbl_success_storyWhereInput[]
    OR?: tbl_success_storyWhereInput[]
    NOT?: tbl_success_storyWhereInput | tbl_success_storyWhereInput[]
    name?: StringFilter<"tbl_success_story"> | string
    organization?: StringNullableFilter<"tbl_success_story"> | string | null
    sucess_story_image?: StringNullableFilter<"tbl_success_story"> | string | null
    content?: StringFilter<"tbl_success_story"> | string
    status?: IntFilter<"tbl_success_story"> | number
    is_deleted?: IntFilter<"tbl_success_story"> | number
    created_on?: DateTimeFilter<"tbl_success_story"> | Date | string
    updated_on?: DateTimeFilter<"tbl_success_story"> | Date | string
  }, "id">

  export type tbl_success_storyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    organization?: SortOrderInput | SortOrder
    sucess_story_image?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_success_storyCountOrderByAggregateInput
    _avg?: tbl_success_storyAvgOrderByAggregateInput
    _max?: tbl_success_storyMaxOrderByAggregateInput
    _min?: tbl_success_storyMinOrderByAggregateInput
    _sum?: tbl_success_storySumOrderByAggregateInput
  }

  export type tbl_success_storyScalarWhereWithAggregatesInput = {
    AND?: tbl_success_storyScalarWhereWithAggregatesInput | tbl_success_storyScalarWhereWithAggregatesInput[]
    OR?: tbl_success_storyScalarWhereWithAggregatesInput[]
    NOT?: tbl_success_storyScalarWhereWithAggregatesInput | tbl_success_storyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_success_story"> | number
    name?: StringWithAggregatesFilter<"tbl_success_story"> | string
    organization?: StringNullableWithAggregatesFilter<"tbl_success_story"> | string | null
    sucess_story_image?: StringNullableWithAggregatesFilter<"tbl_success_story"> | string | null
    content?: StringWithAggregatesFilter<"tbl_success_story"> | string
    status?: IntWithAggregatesFilter<"tbl_success_story"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_success_story"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_success_story"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_success_story"> | Date | string
  }

  export type tbl_home_improvement_applicationWhereInput = {
    AND?: tbl_home_improvement_applicationWhereInput | tbl_home_improvement_applicationWhereInput[]
    OR?: tbl_home_improvement_applicationWhereInput[]
    NOT?: tbl_home_improvement_applicationWhereInput | tbl_home_improvement_applicationWhereInput[]
    id?: IntFilter<"tbl_home_improvement_application"> | number
    application_no?: StringFilter<"tbl_home_improvement_application"> | string
    application_type?: StringFilter<"tbl_home_improvement_application"> | string
    active_step?: IntFilter<"tbl_home_improvement_application"> | number
    is_draft?: IntFilter<"tbl_home_improvement_application"> | number
    applicant_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    applicant_property?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    reside_address?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    email?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    phone_home?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    phone_work?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    phone_cell?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    applicant_employer_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    applicant_employer_address?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    coapplicant_employer_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    coapplicant_employer_address?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    has_mortgage?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    mortgagee?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    mortgage_amount?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    mortgage_balance?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    gross_annual_income?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    monthly_liabilities_total?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    property_owned_duration?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    number_of_units?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    taxes_paid?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    payment_status?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    total_persons?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    children_under_18?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    renovation_details?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    maintenance_plumbing?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_electrical?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_heating_cooling?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_appliances?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_doors_windows?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_flooring_walls?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_safety?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_pest?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_other_text?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    certification_signer_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    certification_signature?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    certification_datetime?: DateTimeNullableFilter<"tbl_home_improvement_application"> | Date | string | null
    status?: IntFilter<"tbl_home_improvement_application"> | number
    is_deleted?: IntFilter<"tbl_home_improvement_application"> | number
    created_on?: DateTimeFilter<"tbl_home_improvement_application"> | Date | string
    updated_on?: DateTimeFilter<"tbl_home_improvement_application"> | Date | string
    household_members?: Tbl_household_memberListRelationFilter
    monthly_liabilities?: Tbl_monthly_liabilityListRelationFilter
  }

  export type tbl_home_improvement_applicationOrderByWithRelationInput = {
    id?: SortOrder
    application_no?: SortOrder
    application_type?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    applicant_name?: SortOrderInput | SortOrder
    applicant_property?: SortOrderInput | SortOrder
    reside_address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone_home?: SortOrderInput | SortOrder
    phone_work?: SortOrderInput | SortOrder
    phone_cell?: SortOrderInput | SortOrder
    applicant_employer_name?: SortOrderInput | SortOrder
    applicant_employer_address?: SortOrderInput | SortOrder
    coapplicant_employer_name?: SortOrderInput | SortOrder
    coapplicant_employer_address?: SortOrderInput | SortOrder
    has_mortgage?: SortOrderInput | SortOrder
    mortgagee?: SortOrderInput | SortOrder
    mortgage_amount?: SortOrderInput | SortOrder
    mortgage_balance?: SortOrderInput | SortOrder
    gross_annual_income?: SortOrderInput | SortOrder
    monthly_liabilities_total?: SortOrderInput | SortOrder
    property_owned_duration?: SortOrderInput | SortOrder
    number_of_units?: SortOrderInput | SortOrder
    taxes_paid?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    total_persons?: SortOrderInput | SortOrder
    children_under_18?: SortOrderInput | SortOrder
    renovation_details?: SortOrderInput | SortOrder
    maintenance_plumbing?: SortOrder
    maintenance_electrical?: SortOrder
    maintenance_heating_cooling?: SortOrder
    maintenance_appliances?: SortOrder
    maintenance_doors_windows?: SortOrder
    maintenance_flooring_walls?: SortOrder
    maintenance_safety?: SortOrder
    maintenance_pest?: SortOrder
    maintenance_other_text?: SortOrderInput | SortOrder
    certification_signer_name?: SortOrderInput | SortOrder
    certification_signature?: SortOrderInput | SortOrder
    certification_datetime?: SortOrderInput | SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    household_members?: tbl_household_memberOrderByRelationAggregateInput
    monthly_liabilities?: tbl_monthly_liabilityOrderByRelationAggregateInput
    _relevance?: tbl_home_improvement_applicationOrderByRelevanceInput
  }

  export type tbl_home_improvement_applicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_home_improvement_applicationWhereInput | tbl_home_improvement_applicationWhereInput[]
    OR?: tbl_home_improvement_applicationWhereInput[]
    NOT?: tbl_home_improvement_applicationWhereInput | tbl_home_improvement_applicationWhereInput[]
    application_no?: StringFilter<"tbl_home_improvement_application"> | string
    application_type?: StringFilter<"tbl_home_improvement_application"> | string
    active_step?: IntFilter<"tbl_home_improvement_application"> | number
    is_draft?: IntFilter<"tbl_home_improvement_application"> | number
    applicant_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    applicant_property?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    reside_address?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    email?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    phone_home?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    phone_work?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    phone_cell?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    applicant_employer_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    applicant_employer_address?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    coapplicant_employer_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    coapplicant_employer_address?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    has_mortgage?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    mortgagee?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    mortgage_amount?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    mortgage_balance?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    gross_annual_income?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    monthly_liabilities_total?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    property_owned_duration?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    number_of_units?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    taxes_paid?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    payment_status?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    total_persons?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    children_under_18?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    renovation_details?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    maintenance_plumbing?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_electrical?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_heating_cooling?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_appliances?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_doors_windows?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_flooring_walls?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_safety?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_pest?: BoolFilter<"tbl_home_improvement_application"> | boolean
    maintenance_other_text?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    certification_signer_name?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    certification_signature?: StringNullableFilter<"tbl_home_improvement_application"> | string | null
    certification_datetime?: DateTimeNullableFilter<"tbl_home_improvement_application"> | Date | string | null
    status?: IntFilter<"tbl_home_improvement_application"> | number
    is_deleted?: IntFilter<"tbl_home_improvement_application"> | number
    created_on?: DateTimeFilter<"tbl_home_improvement_application"> | Date | string
    updated_on?: DateTimeFilter<"tbl_home_improvement_application"> | Date | string
    household_members?: Tbl_household_memberListRelationFilter
    monthly_liabilities?: Tbl_monthly_liabilityListRelationFilter
  }, "id">

  export type tbl_home_improvement_applicationOrderByWithAggregationInput = {
    id?: SortOrder
    application_no?: SortOrder
    application_type?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    applicant_name?: SortOrderInput | SortOrder
    applicant_property?: SortOrderInput | SortOrder
    reside_address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone_home?: SortOrderInput | SortOrder
    phone_work?: SortOrderInput | SortOrder
    phone_cell?: SortOrderInput | SortOrder
    applicant_employer_name?: SortOrderInput | SortOrder
    applicant_employer_address?: SortOrderInput | SortOrder
    coapplicant_employer_name?: SortOrderInput | SortOrder
    coapplicant_employer_address?: SortOrderInput | SortOrder
    has_mortgage?: SortOrderInput | SortOrder
    mortgagee?: SortOrderInput | SortOrder
    mortgage_amount?: SortOrderInput | SortOrder
    mortgage_balance?: SortOrderInput | SortOrder
    gross_annual_income?: SortOrderInput | SortOrder
    monthly_liabilities_total?: SortOrderInput | SortOrder
    property_owned_duration?: SortOrderInput | SortOrder
    number_of_units?: SortOrderInput | SortOrder
    taxes_paid?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    total_persons?: SortOrderInput | SortOrder
    children_under_18?: SortOrderInput | SortOrder
    renovation_details?: SortOrderInput | SortOrder
    maintenance_plumbing?: SortOrder
    maintenance_electrical?: SortOrder
    maintenance_heating_cooling?: SortOrder
    maintenance_appliances?: SortOrder
    maintenance_doors_windows?: SortOrder
    maintenance_flooring_walls?: SortOrder
    maintenance_safety?: SortOrder
    maintenance_pest?: SortOrder
    maintenance_other_text?: SortOrderInput | SortOrder
    certification_signer_name?: SortOrderInput | SortOrder
    certification_signature?: SortOrderInput | SortOrder
    certification_datetime?: SortOrderInput | SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_home_improvement_applicationCountOrderByAggregateInput
    _avg?: tbl_home_improvement_applicationAvgOrderByAggregateInput
    _max?: tbl_home_improvement_applicationMaxOrderByAggregateInput
    _min?: tbl_home_improvement_applicationMinOrderByAggregateInput
    _sum?: tbl_home_improvement_applicationSumOrderByAggregateInput
  }

  export type tbl_home_improvement_applicationScalarWhereWithAggregatesInput = {
    AND?: tbl_home_improvement_applicationScalarWhereWithAggregatesInput | tbl_home_improvement_applicationScalarWhereWithAggregatesInput[]
    OR?: tbl_home_improvement_applicationScalarWhereWithAggregatesInput[]
    NOT?: tbl_home_improvement_applicationScalarWhereWithAggregatesInput | tbl_home_improvement_applicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_home_improvement_application"> | number
    application_no?: StringWithAggregatesFilter<"tbl_home_improvement_application"> | string
    application_type?: StringWithAggregatesFilter<"tbl_home_improvement_application"> | string
    active_step?: IntWithAggregatesFilter<"tbl_home_improvement_application"> | number
    is_draft?: IntWithAggregatesFilter<"tbl_home_improvement_application"> | number
    applicant_name?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    applicant_property?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    reside_address?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    email?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    phone_home?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    phone_work?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    phone_cell?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    applicant_employer_name?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    applicant_employer_address?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    coapplicant_employer_name?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    coapplicant_employer_address?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    has_mortgage?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    mortgagee?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    mortgage_amount?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    mortgage_balance?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    gross_annual_income?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    monthly_liabilities_total?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    property_owned_duration?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    number_of_units?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    taxes_paid?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    payment_status?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    total_persons?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    children_under_18?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    renovation_details?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    maintenance_plumbing?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_electrical?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_heating_cooling?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_appliances?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_doors_windows?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_flooring_walls?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_safety?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_pest?: BoolWithAggregatesFilter<"tbl_home_improvement_application"> | boolean
    maintenance_other_text?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    certification_signer_name?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    certification_signature?: StringNullableWithAggregatesFilter<"tbl_home_improvement_application"> | string | null
    certification_datetime?: DateTimeNullableWithAggregatesFilter<"tbl_home_improvement_application"> | Date | string | null
    status?: IntWithAggregatesFilter<"tbl_home_improvement_application"> | number
    is_deleted?: IntWithAggregatesFilter<"tbl_home_improvement_application"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_home_improvement_application"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_home_improvement_application"> | Date | string
  }

  export type tbl_household_memberWhereInput = {
    AND?: tbl_household_memberWhereInput | tbl_household_memberWhereInput[]
    OR?: tbl_household_memberWhereInput[]
    NOT?: tbl_household_memberWhereInput | tbl_household_memberWhereInput[]
    id?: IntFilter<"tbl_household_member"> | number
    application_id?: IntFilter<"tbl_household_member"> | number
    name?: StringFilter<"tbl_household_member"> | string
    age?: IntFilter<"tbl_household_member"> | number
    created_on?: DateTimeFilter<"tbl_household_member"> | Date | string
    updated_on?: DateTimeFilter<"tbl_household_member"> | Date | string
    application?: XOR<Tbl_home_improvement_applicationScalarRelationFilter, tbl_home_improvement_applicationWhereInput>
  }

  export type tbl_household_memberOrderByWithRelationInput = {
    id?: SortOrder
    application_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    application?: tbl_home_improvement_applicationOrderByWithRelationInput
    _relevance?: tbl_household_memberOrderByRelevanceInput
  }

  export type tbl_household_memberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_household_memberWhereInput | tbl_household_memberWhereInput[]
    OR?: tbl_household_memberWhereInput[]
    NOT?: tbl_household_memberWhereInput | tbl_household_memberWhereInput[]
    application_id?: IntFilter<"tbl_household_member"> | number
    name?: StringFilter<"tbl_household_member"> | string
    age?: IntFilter<"tbl_household_member"> | number
    created_on?: DateTimeFilter<"tbl_household_member"> | Date | string
    updated_on?: DateTimeFilter<"tbl_household_member"> | Date | string
    application?: XOR<Tbl_home_improvement_applicationScalarRelationFilter, tbl_home_improvement_applicationWhereInput>
  }, "id">

  export type tbl_household_memberOrderByWithAggregationInput = {
    id?: SortOrder
    application_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_household_memberCountOrderByAggregateInput
    _avg?: tbl_household_memberAvgOrderByAggregateInput
    _max?: tbl_household_memberMaxOrderByAggregateInput
    _min?: tbl_household_memberMinOrderByAggregateInput
    _sum?: tbl_household_memberSumOrderByAggregateInput
  }

  export type tbl_household_memberScalarWhereWithAggregatesInput = {
    AND?: tbl_household_memberScalarWhereWithAggregatesInput | tbl_household_memberScalarWhereWithAggregatesInput[]
    OR?: tbl_household_memberScalarWhereWithAggregatesInput[]
    NOT?: tbl_household_memberScalarWhereWithAggregatesInput | tbl_household_memberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_household_member"> | number
    application_id?: IntWithAggregatesFilter<"tbl_household_member"> | number
    name?: StringWithAggregatesFilter<"tbl_household_member"> | string
    age?: IntWithAggregatesFilter<"tbl_household_member"> | number
    created_on?: DateTimeWithAggregatesFilter<"tbl_household_member"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_household_member"> | Date | string
  }

  export type tbl_monthly_liabilityWhereInput = {
    AND?: tbl_monthly_liabilityWhereInput | tbl_monthly_liabilityWhereInput[]
    OR?: tbl_monthly_liabilityWhereInput[]
    NOT?: tbl_monthly_liabilityWhereInput | tbl_monthly_liabilityWhereInput[]
    id?: IntFilter<"tbl_monthly_liability"> | number
    application_id?: IntFilter<"tbl_monthly_liability"> | number
    payee?: StringFilter<"tbl_monthly_liability"> | string
    amount?: StringFilter<"tbl_monthly_liability"> | string
    created_on?: DateTimeFilter<"tbl_monthly_liability"> | Date | string
    updated_on?: DateTimeFilter<"tbl_monthly_liability"> | Date | string
    application?: XOR<Tbl_home_improvement_applicationScalarRelationFilter, tbl_home_improvement_applicationWhereInput>
  }

  export type tbl_monthly_liabilityOrderByWithRelationInput = {
    id?: SortOrder
    application_id?: SortOrder
    payee?: SortOrder
    amount?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    application?: tbl_home_improvement_applicationOrderByWithRelationInput
    _relevance?: tbl_monthly_liabilityOrderByRelevanceInput
  }

  export type tbl_monthly_liabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_monthly_liabilityWhereInput | tbl_monthly_liabilityWhereInput[]
    OR?: tbl_monthly_liabilityWhereInput[]
    NOT?: tbl_monthly_liabilityWhereInput | tbl_monthly_liabilityWhereInput[]
    application_id?: IntFilter<"tbl_monthly_liability"> | number
    payee?: StringFilter<"tbl_monthly_liability"> | string
    amount?: StringFilter<"tbl_monthly_liability"> | string
    created_on?: DateTimeFilter<"tbl_monthly_liability"> | Date | string
    updated_on?: DateTimeFilter<"tbl_monthly_liability"> | Date | string
    application?: XOR<Tbl_home_improvement_applicationScalarRelationFilter, tbl_home_improvement_applicationWhereInput>
  }, "id">

  export type tbl_monthly_liabilityOrderByWithAggregationInput = {
    id?: SortOrder
    application_id?: SortOrder
    payee?: SortOrder
    amount?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: tbl_monthly_liabilityCountOrderByAggregateInput
    _avg?: tbl_monthly_liabilityAvgOrderByAggregateInput
    _max?: tbl_monthly_liabilityMaxOrderByAggregateInput
    _min?: tbl_monthly_liabilityMinOrderByAggregateInput
    _sum?: tbl_monthly_liabilitySumOrderByAggregateInput
  }

  export type tbl_monthly_liabilityScalarWhereWithAggregatesInput = {
    AND?: tbl_monthly_liabilityScalarWhereWithAggregatesInput | tbl_monthly_liabilityScalarWhereWithAggregatesInput[]
    OR?: tbl_monthly_liabilityScalarWhereWithAggregatesInput[]
    NOT?: tbl_monthly_liabilityScalarWhereWithAggregatesInput | tbl_monthly_liabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_monthly_liability"> | number
    application_id?: IntWithAggregatesFilter<"tbl_monthly_liability"> | number
    payee?: StringWithAggregatesFilter<"tbl_monthly_liability"> | string
    amount?: StringWithAggregatesFilter<"tbl_monthly_liability"> | string
    created_on?: DateTimeWithAggregatesFilter<"tbl_monthly_liability"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"tbl_monthly_liability"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    department?: tbl_department_masterCreateNestedOneWithoutUsersInput
    designation?: tbl_designation_masterCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    department_id?: number | null
    designation_id?: number | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tbl_department_masterUpdateOneWithoutUsersNestedInput
    designation?: tbl_designation_masterUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    designation_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    department_id?: number | null
    designation_id?: number | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    designation_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_designation_masterCreateInput = {
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    users?: UserCreateNestedManyWithoutDesignationInput
    teamMembers?: tbl_our_teamCreateNestedManyWithoutDesignationInput
  }

  export type tbl_designation_masterUncheckedCreateInput = {
    id?: number
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDesignationInput
    teamMembers?: tbl_our_teamUncheckedCreateNestedManyWithoutDesignationInput
  }

  export type tbl_designation_masterUpdateInput = {
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDesignationNestedInput
    teamMembers?: tbl_our_teamUpdateManyWithoutDesignationNestedInput
  }

  export type tbl_designation_masterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDesignationNestedInput
    teamMembers?: tbl_our_teamUncheckedUpdateManyWithoutDesignationNestedInput
  }

  export type tbl_designation_masterCreateManyInput = {
    id?: number
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_designation_masterUpdateManyMutationInput = {
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_designation_masterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_status_masterCreateInput = {
    service_name: string
    status_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_status_masterUncheckedCreateInput = {
    id?: number
    service_name: string
    status_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_status_masterUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    status_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_status_masterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    status_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_status_masterCreateManyInput = {
    id?: number
    service_name: string
    status_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_status_masterUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    status_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_status_masterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    status_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_department_masterCreateInput = {
    department_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type tbl_department_masterUncheckedCreateInput = {
    id?: number
    department_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type tbl_department_masterUpdateInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type tbl_department_masterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type tbl_department_masterCreateManyInput = {
    id?: number
    department_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_department_masterUpdateManyMutationInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_department_masterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCategoryCreateInput = {
    name: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUncheckedCreateInput = {
    id?: number
    name: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryCreateManyInput = {
    id?: number
    name: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    blog_image?: string | null
    short_description: string
    blog_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BlogCategoryCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    category_id: number
    blog_image?: string | null
    short_description: string
    blog_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    category_id: number
    blog_image?: string | null
    short_description: string
    blog_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_press_releaseCreateInput = {
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    press_release_image?: string | null
    short_description: string
    press_release_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tbl_press_releaseUncheckedCreateInput = {
    id?: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    press_release_image?: string | null
    short_description: string
    press_release_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tbl_press_releaseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    press_release_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    press_release_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_press_releaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    press_release_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    press_release_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_press_releaseCreateManyInput = {
    id?: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    press_release_image?: string | null
    short_description: string
    press_release_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tbl_press_releaseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    press_release_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    press_release_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_press_releaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    press_release_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    press_release_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_faqCreateInput = {
    question: string
    answer: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_faqUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_faqUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_faqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_faqCreateManyInput = {
    id?: number
    question: string
    answer: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_faqUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_faqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_contact_usCreateInput = {
    name: string
    email: string
    phone: string
    message: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_contact_usUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    message: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_contact_usUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_contact_usUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_contact_usCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    message: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_contact_usUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_contact_usUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_our_teamCreateInput = {
    name: string
    our_team_image?: string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    designation?: tbl_designation_masterCreateNestedOneWithoutTeamMembersInput
  }

  export type tbl_our_teamUncheckedCreateInput = {
    id?: number
    name: string
    designation_id?: number | null
    our_team_image?: string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_our_teamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: tbl_designation_masterUpdateOneWithoutTeamMembersNestedInput
  }

  export type tbl_our_teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation_id?: NullableIntFieldUpdateOperationsInput | number | null
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_our_teamCreateManyInput = {
    id?: number
    name: string
    designation_id?: number | null
    our_team_image?: string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_our_teamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_our_teamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation_id?: NullableIntFieldUpdateOperationsInput | number | null
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_success_storyCreateInput = {
    name: string
    organization?: string | null
    sucess_story_image?: string | null
    content: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_success_storyUncheckedCreateInput = {
    id?: number
    name: string
    organization?: string | null
    sucess_story_image?: string | null
    content: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_success_storyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sucess_story_image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_success_storyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sucess_story_image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_success_storyCreateManyInput = {
    id?: number
    name: string
    organization?: string | null
    sucess_story_image?: string | null
    content: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_success_storyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sucess_story_image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_success_storyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sucess_story_image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_home_improvement_applicationCreateInput = {
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    household_members?: tbl_household_memberCreateNestedManyWithoutApplicationInput
    monthly_liabilities?: tbl_monthly_liabilityCreateNestedManyWithoutApplicationInput
  }

  export type tbl_home_improvement_applicationUncheckedCreateInput = {
    id?: number
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    household_members?: tbl_household_memberUncheckedCreateNestedManyWithoutApplicationInput
    monthly_liabilities?: tbl_monthly_liabilityUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type tbl_home_improvement_applicationUpdateInput = {
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    household_members?: tbl_household_memberUpdateManyWithoutApplicationNestedInput
    monthly_liabilities?: tbl_monthly_liabilityUpdateManyWithoutApplicationNestedInput
  }

  export type tbl_home_improvement_applicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    household_members?: tbl_household_memberUncheckedUpdateManyWithoutApplicationNestedInput
    monthly_liabilities?: tbl_monthly_liabilityUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type tbl_home_improvement_applicationCreateManyInput = {
    id?: number
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_home_improvement_applicationUpdateManyMutationInput = {
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_home_improvement_applicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_household_memberCreateInput = {
    name: string
    age: number
    created_on?: Date | string
    updated_on?: Date | string
    application: tbl_home_improvement_applicationCreateNestedOneWithoutHousehold_membersInput
  }

  export type tbl_household_memberUncheckedCreateInput = {
    id?: number
    application_id: number
    name: string
    age: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_household_memberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: tbl_home_improvement_applicationUpdateOneRequiredWithoutHousehold_membersNestedInput
  }

  export type tbl_household_memberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_household_memberCreateManyInput = {
    id?: number
    application_id: number
    name: string
    age: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_household_memberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_household_memberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_monthly_liabilityCreateInput = {
    payee: string
    amount: string
    created_on?: Date | string
    updated_on?: Date | string
    application: tbl_home_improvement_applicationCreateNestedOneWithoutMonthly_liabilitiesInput
  }

  export type tbl_monthly_liabilityUncheckedCreateInput = {
    id?: number
    application_id: number
    payee: string
    amount: string
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_monthly_liabilityUpdateInput = {
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: tbl_home_improvement_applicationUpdateOneRequiredWithoutMonthly_liabilitiesNestedInput
  }

  export type tbl_monthly_liabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_monthly_liabilityCreateManyInput = {
    id?: number
    application_id: number
    payee: string
    amount: string
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_monthly_liabilityUpdateManyMutationInput = {
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_monthly_liabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_id?: IntFieldUpdateOperationsInput | number
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tbl_department_masterNullableScalarRelationFilter = {
    is?: tbl_department_masterWhereInput | null
    isNot?: tbl_department_masterWhereInput | null
  }

  export type Tbl_designation_masterNullableScalarRelationFilter = {
    is?: tbl_designation_masterWhereInput | null
    isNot?: tbl_designation_masterWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    department_id?: SortOrder
    designation_id?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    designation_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    department_id?: SortOrder
    designation_id?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    department_id?: SortOrder
    designation_id?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    designation_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type Tbl_our_teamListRelationFilter = {
    every?: tbl_our_teamWhereInput
    some?: tbl_our_teamWhereInput
    none?: tbl_our_teamWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_our_teamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_designation_masterOrderByRelevanceInput = {
    fields: tbl_designation_masterOrderByRelevanceFieldEnum | tbl_designation_masterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_designation_masterCountOrderByAggregateInput = {
    id?: SortOrder
    designation_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_designation_masterAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_designation_masterMaxOrderByAggregateInput = {
    id?: SortOrder
    designation_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_designation_masterMinOrderByAggregateInput = {
    id?: SortOrder
    designation_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_designation_masterSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_status_masterOrderByRelevanceInput = {
    fields: tbl_status_masterOrderByRelevanceFieldEnum | tbl_status_masterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_status_masterCountOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    status_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_status_masterAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_status_masterMaxOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    status_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_status_masterMinOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    status_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_status_masterSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_department_masterOrderByRelevanceInput = {
    fields: tbl_department_masterOrderByRelevanceFieldEnum | tbl_department_masterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_department_masterCountOrderByAggregateInput = {
    id?: SortOrder
    department_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_department_masterAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_department_masterMaxOrderByAggregateInput = {
    id?: SortOrder
    department_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_department_masterMinOrderByAggregateInput = {
    id?: SortOrder
    department_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_department_masterSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCategoryOrderByRelevanceInput = {
    fields: BlogCategoryOrderByRelevanceFieldEnum | BlogCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlogCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlogCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCategorySumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlogCategoryScalarRelationFilter = {
    is?: BlogCategoryWhereInput
    isNot?: BlogCategoryWhereInput
  }

  export type BlogOrderByRelevanceInput = {
    fields: BlogOrderByRelevanceFieldEnum | BlogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrder
    category_id?: SortOrder
    blog_image?: SortOrder
    short_description?: SortOrder
    blog_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrder
    category_id?: SortOrder
    blog_image?: SortOrder
    short_description?: SortOrder
    blog_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrder
    category_id?: SortOrder
    blog_image?: SortOrder
    short_description?: SortOrder
    blog_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_press_releaseOrderByRelevanceInput = {
    fields: tbl_press_releaseOrderByRelevanceFieldEnum | tbl_press_releaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_press_releaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrder
    press_release_image?: SortOrder
    short_description?: SortOrder
    press_release_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tbl_press_releaseAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_press_releaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrder
    press_release_image?: SortOrder
    short_description?: SortOrder
    press_release_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tbl_press_releaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_url?: SortOrder
    meta_keyword?: SortOrder
    author?: SortOrder
    tag?: SortOrder
    meta_description?: SortOrder
    press_release_image?: SortOrder
    short_description?: SortOrder
    press_release_content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tbl_press_releaseSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_faqOrderByRelevanceInput = {
    fields: tbl_faqOrderByRelevanceFieldEnum | tbl_faqOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_faqCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_faqAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_faqMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_faqMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_faqSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_contact_usOrderByRelevanceInput = {
    fields: tbl_contact_usOrderByRelevanceFieldEnum | tbl_contact_usOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_contact_usCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_contact_usAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_contact_usMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_contact_usMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_contact_usSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_our_teamOrderByRelevanceInput = {
    fields: tbl_our_teamOrderByRelevanceFieldEnum | tbl_our_teamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_our_teamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation_id?: SortOrder
    our_team_image?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_our_teamAvgOrderByAggregateInput = {
    id?: SortOrder
    designation_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_our_teamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation_id?: SortOrder
    our_team_image?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_our_teamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation_id?: SortOrder
    our_team_image?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_our_teamSumOrderByAggregateInput = {
    id?: SortOrder
    designation_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_success_storyOrderByRelevanceInput = {
    fields: tbl_success_storyOrderByRelevanceFieldEnum | tbl_success_storyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_success_storyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organization?: SortOrder
    sucess_story_image?: SortOrder
    content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_success_storyAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_success_storyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organization?: SortOrder
    sucess_story_image?: SortOrder
    content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_success_storyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organization?: SortOrder
    sucess_story_image?: SortOrder
    content?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_success_storySumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Tbl_household_memberListRelationFilter = {
    every?: tbl_household_memberWhereInput
    some?: tbl_household_memberWhereInput
    none?: tbl_household_memberWhereInput
  }

  export type Tbl_monthly_liabilityListRelationFilter = {
    every?: tbl_monthly_liabilityWhereInput
    some?: tbl_monthly_liabilityWhereInput
    none?: tbl_monthly_liabilityWhereInput
  }

  export type tbl_household_memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_monthly_liabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_home_improvement_applicationOrderByRelevanceInput = {
    fields: tbl_home_improvement_applicationOrderByRelevanceFieldEnum | tbl_home_improvement_applicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_home_improvement_applicationCountOrderByAggregateInput = {
    id?: SortOrder
    application_no?: SortOrder
    application_type?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    applicant_name?: SortOrder
    applicant_property?: SortOrder
    reside_address?: SortOrder
    email?: SortOrder
    phone_home?: SortOrder
    phone_work?: SortOrder
    phone_cell?: SortOrder
    applicant_employer_name?: SortOrder
    applicant_employer_address?: SortOrder
    coapplicant_employer_name?: SortOrder
    coapplicant_employer_address?: SortOrder
    has_mortgage?: SortOrder
    mortgagee?: SortOrder
    mortgage_amount?: SortOrder
    mortgage_balance?: SortOrder
    gross_annual_income?: SortOrder
    monthly_liabilities_total?: SortOrder
    property_owned_duration?: SortOrder
    number_of_units?: SortOrder
    taxes_paid?: SortOrder
    payment_status?: SortOrder
    total_persons?: SortOrder
    children_under_18?: SortOrder
    renovation_details?: SortOrder
    maintenance_plumbing?: SortOrder
    maintenance_electrical?: SortOrder
    maintenance_heating_cooling?: SortOrder
    maintenance_appliances?: SortOrder
    maintenance_doors_windows?: SortOrder
    maintenance_flooring_walls?: SortOrder
    maintenance_safety?: SortOrder
    maintenance_pest?: SortOrder
    maintenance_other_text?: SortOrder
    certification_signer_name?: SortOrder
    certification_signature?: SortOrder
    certification_datetime?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_home_improvement_applicationAvgOrderByAggregateInput = {
    id?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type tbl_home_improvement_applicationMaxOrderByAggregateInput = {
    id?: SortOrder
    application_no?: SortOrder
    application_type?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    applicant_name?: SortOrder
    applicant_property?: SortOrder
    reside_address?: SortOrder
    email?: SortOrder
    phone_home?: SortOrder
    phone_work?: SortOrder
    phone_cell?: SortOrder
    applicant_employer_name?: SortOrder
    applicant_employer_address?: SortOrder
    coapplicant_employer_name?: SortOrder
    coapplicant_employer_address?: SortOrder
    has_mortgage?: SortOrder
    mortgagee?: SortOrder
    mortgage_amount?: SortOrder
    mortgage_balance?: SortOrder
    gross_annual_income?: SortOrder
    monthly_liabilities_total?: SortOrder
    property_owned_duration?: SortOrder
    number_of_units?: SortOrder
    taxes_paid?: SortOrder
    payment_status?: SortOrder
    total_persons?: SortOrder
    children_under_18?: SortOrder
    renovation_details?: SortOrder
    maintenance_plumbing?: SortOrder
    maintenance_electrical?: SortOrder
    maintenance_heating_cooling?: SortOrder
    maintenance_appliances?: SortOrder
    maintenance_doors_windows?: SortOrder
    maintenance_flooring_walls?: SortOrder
    maintenance_safety?: SortOrder
    maintenance_pest?: SortOrder
    maintenance_other_text?: SortOrder
    certification_signer_name?: SortOrder
    certification_signature?: SortOrder
    certification_datetime?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_home_improvement_applicationMinOrderByAggregateInput = {
    id?: SortOrder
    application_no?: SortOrder
    application_type?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    applicant_name?: SortOrder
    applicant_property?: SortOrder
    reside_address?: SortOrder
    email?: SortOrder
    phone_home?: SortOrder
    phone_work?: SortOrder
    phone_cell?: SortOrder
    applicant_employer_name?: SortOrder
    applicant_employer_address?: SortOrder
    coapplicant_employer_name?: SortOrder
    coapplicant_employer_address?: SortOrder
    has_mortgage?: SortOrder
    mortgagee?: SortOrder
    mortgage_amount?: SortOrder
    mortgage_balance?: SortOrder
    gross_annual_income?: SortOrder
    monthly_liabilities_total?: SortOrder
    property_owned_duration?: SortOrder
    number_of_units?: SortOrder
    taxes_paid?: SortOrder
    payment_status?: SortOrder
    total_persons?: SortOrder
    children_under_18?: SortOrder
    renovation_details?: SortOrder
    maintenance_plumbing?: SortOrder
    maintenance_electrical?: SortOrder
    maintenance_heating_cooling?: SortOrder
    maintenance_appliances?: SortOrder
    maintenance_doors_windows?: SortOrder
    maintenance_flooring_walls?: SortOrder
    maintenance_safety?: SortOrder
    maintenance_pest?: SortOrder
    maintenance_other_text?: SortOrder
    certification_signer_name?: SortOrder
    certification_signature?: SortOrder
    certification_datetime?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_home_improvement_applicationSumOrderByAggregateInput = {
    id?: SortOrder
    active_step?: SortOrder
    is_draft?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Tbl_home_improvement_applicationScalarRelationFilter = {
    is?: tbl_home_improvement_applicationWhereInput
    isNot?: tbl_home_improvement_applicationWhereInput
  }

  export type tbl_household_memberOrderByRelevanceInput = {
    fields: tbl_household_memberOrderByRelevanceFieldEnum | tbl_household_memberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_household_memberCountOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_household_memberAvgOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    age?: SortOrder
  }

  export type tbl_household_memberMaxOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_household_memberMinOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_household_memberSumOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    age?: SortOrder
  }

  export type tbl_monthly_liabilityOrderByRelevanceInput = {
    fields: tbl_monthly_liabilityOrderByRelevanceFieldEnum | tbl_monthly_liabilityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_monthly_liabilityCountOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    payee?: SortOrder
    amount?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_monthly_liabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
  }

  export type tbl_monthly_liabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    payee?: SortOrder
    amount?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_monthly_liabilityMinOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    payee?: SortOrder
    amount?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type tbl_monthly_liabilitySumOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
  }

  export type tbl_department_masterCreateNestedOneWithoutUsersInput = {
    create?: XOR<tbl_department_masterCreateWithoutUsersInput, tbl_department_masterUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tbl_department_masterCreateOrConnectWithoutUsersInput
    connect?: tbl_department_masterWhereUniqueInput
  }

  export type tbl_designation_masterCreateNestedOneWithoutUsersInput = {
    create?: XOR<tbl_designation_masterCreateWithoutUsersInput, tbl_designation_masterUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tbl_designation_masterCreateOrConnectWithoutUsersInput
    connect?: tbl_designation_masterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tbl_department_masterUpdateOneWithoutUsersNestedInput = {
    create?: XOR<tbl_department_masterCreateWithoutUsersInput, tbl_department_masterUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tbl_department_masterCreateOrConnectWithoutUsersInput
    upsert?: tbl_department_masterUpsertWithoutUsersInput
    disconnect?: tbl_department_masterWhereInput | boolean
    delete?: tbl_department_masterWhereInput | boolean
    connect?: tbl_department_masterWhereUniqueInput
    update?: XOR<XOR<tbl_department_masterUpdateToOneWithWhereWithoutUsersInput, tbl_department_masterUpdateWithoutUsersInput>, tbl_department_masterUncheckedUpdateWithoutUsersInput>
  }

  export type tbl_designation_masterUpdateOneWithoutUsersNestedInput = {
    create?: XOR<tbl_designation_masterCreateWithoutUsersInput, tbl_designation_masterUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tbl_designation_masterCreateOrConnectWithoutUsersInput
    upsert?: tbl_designation_masterUpsertWithoutUsersInput
    disconnect?: tbl_designation_masterWhereInput | boolean
    delete?: tbl_designation_masterWhereInput | boolean
    connect?: tbl_designation_masterWhereUniqueInput
    update?: XOR<XOR<tbl_designation_masterUpdateToOneWithWhereWithoutUsersInput, tbl_designation_masterUpdateWithoutUsersInput>, tbl_designation_masterUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutDesignationInput = {
    create?: XOR<UserCreateWithoutDesignationInput, UserUncheckedCreateWithoutDesignationInput> | UserCreateWithoutDesignationInput[] | UserUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDesignationInput | UserCreateOrConnectWithoutDesignationInput[]
    createMany?: UserCreateManyDesignationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type tbl_our_teamCreateNestedManyWithoutDesignationInput = {
    create?: XOR<tbl_our_teamCreateWithoutDesignationInput, tbl_our_teamUncheckedCreateWithoutDesignationInput> | tbl_our_teamCreateWithoutDesignationInput[] | tbl_our_teamUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: tbl_our_teamCreateOrConnectWithoutDesignationInput | tbl_our_teamCreateOrConnectWithoutDesignationInput[]
    createMany?: tbl_our_teamCreateManyDesignationInputEnvelope
    connect?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDesignationInput = {
    create?: XOR<UserCreateWithoutDesignationInput, UserUncheckedCreateWithoutDesignationInput> | UserCreateWithoutDesignationInput[] | UserUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDesignationInput | UserCreateOrConnectWithoutDesignationInput[]
    createMany?: UserCreateManyDesignationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type tbl_our_teamUncheckedCreateNestedManyWithoutDesignationInput = {
    create?: XOR<tbl_our_teamCreateWithoutDesignationInput, tbl_our_teamUncheckedCreateWithoutDesignationInput> | tbl_our_teamCreateWithoutDesignationInput[] | tbl_our_teamUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: tbl_our_teamCreateOrConnectWithoutDesignationInput | tbl_our_teamCreateOrConnectWithoutDesignationInput[]
    createMany?: tbl_our_teamCreateManyDesignationInputEnvelope
    connect?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDesignationNestedInput = {
    create?: XOR<UserCreateWithoutDesignationInput, UserUncheckedCreateWithoutDesignationInput> | UserCreateWithoutDesignationInput[] | UserUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDesignationInput | UserCreateOrConnectWithoutDesignationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDesignationInput | UserUpsertWithWhereUniqueWithoutDesignationInput[]
    createMany?: UserCreateManyDesignationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDesignationInput | UserUpdateWithWhereUniqueWithoutDesignationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDesignationInput | UserUpdateManyWithWhereWithoutDesignationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type tbl_our_teamUpdateManyWithoutDesignationNestedInput = {
    create?: XOR<tbl_our_teamCreateWithoutDesignationInput, tbl_our_teamUncheckedCreateWithoutDesignationInput> | tbl_our_teamCreateWithoutDesignationInput[] | tbl_our_teamUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: tbl_our_teamCreateOrConnectWithoutDesignationInput | tbl_our_teamCreateOrConnectWithoutDesignationInput[]
    upsert?: tbl_our_teamUpsertWithWhereUniqueWithoutDesignationInput | tbl_our_teamUpsertWithWhereUniqueWithoutDesignationInput[]
    createMany?: tbl_our_teamCreateManyDesignationInputEnvelope
    set?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    disconnect?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    delete?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    connect?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    update?: tbl_our_teamUpdateWithWhereUniqueWithoutDesignationInput | tbl_our_teamUpdateWithWhereUniqueWithoutDesignationInput[]
    updateMany?: tbl_our_teamUpdateManyWithWhereWithoutDesignationInput | tbl_our_teamUpdateManyWithWhereWithoutDesignationInput[]
    deleteMany?: tbl_our_teamScalarWhereInput | tbl_our_teamScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDesignationNestedInput = {
    create?: XOR<UserCreateWithoutDesignationInput, UserUncheckedCreateWithoutDesignationInput> | UserCreateWithoutDesignationInput[] | UserUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDesignationInput | UserCreateOrConnectWithoutDesignationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDesignationInput | UserUpsertWithWhereUniqueWithoutDesignationInput[]
    createMany?: UserCreateManyDesignationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDesignationInput | UserUpdateWithWhereUniqueWithoutDesignationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDesignationInput | UserUpdateManyWithWhereWithoutDesignationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type tbl_our_teamUncheckedUpdateManyWithoutDesignationNestedInput = {
    create?: XOR<tbl_our_teamCreateWithoutDesignationInput, tbl_our_teamUncheckedCreateWithoutDesignationInput> | tbl_our_teamCreateWithoutDesignationInput[] | tbl_our_teamUncheckedCreateWithoutDesignationInput[]
    connectOrCreate?: tbl_our_teamCreateOrConnectWithoutDesignationInput | tbl_our_teamCreateOrConnectWithoutDesignationInput[]
    upsert?: tbl_our_teamUpsertWithWhereUniqueWithoutDesignationInput | tbl_our_teamUpsertWithWhereUniqueWithoutDesignationInput[]
    createMany?: tbl_our_teamCreateManyDesignationInputEnvelope
    set?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    disconnect?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    delete?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    connect?: tbl_our_teamWhereUniqueInput | tbl_our_teamWhereUniqueInput[]
    update?: tbl_our_teamUpdateWithWhereUniqueWithoutDesignationInput | tbl_our_teamUpdateWithWhereUniqueWithoutDesignationInput[]
    updateMany?: tbl_our_teamUpdateManyWithWhereWithoutDesignationInput | tbl_our_teamUpdateManyWithWhereWithoutDesignationInput[]
    deleteMany?: tbl_our_teamScalarWhereInput | tbl_our_teamScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BlogCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutCategoryInput | BlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutCategoryInput | BlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutCategoryInput | BlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutCategoryInput | BlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutCategoryInput | BlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutCategoryInput | BlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogCategoryCreateNestedOneWithoutBlogsInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogCategoryUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput
    upsert?: BlogCategoryUpsertWithoutBlogsInput
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutBlogsInput, BlogCategoryUpdateWithoutBlogsInput>, BlogCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type tbl_designation_masterCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<tbl_designation_masterCreateWithoutTeamMembersInput, tbl_designation_masterUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: tbl_designation_masterCreateOrConnectWithoutTeamMembersInput
    connect?: tbl_designation_masterWhereUniqueInput
  }

  export type tbl_designation_masterUpdateOneWithoutTeamMembersNestedInput = {
    create?: XOR<tbl_designation_masterCreateWithoutTeamMembersInput, tbl_designation_masterUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: tbl_designation_masterCreateOrConnectWithoutTeamMembersInput
    upsert?: tbl_designation_masterUpsertWithoutTeamMembersInput
    disconnect?: tbl_designation_masterWhereInput | boolean
    delete?: tbl_designation_masterWhereInput | boolean
    connect?: tbl_designation_masterWhereUniqueInput
    update?: XOR<XOR<tbl_designation_masterUpdateToOneWithWhereWithoutTeamMembersInput, tbl_designation_masterUpdateWithoutTeamMembersInput>, tbl_designation_masterUncheckedUpdateWithoutTeamMembersInput>
  }

  export type tbl_household_memberCreateNestedManyWithoutApplicationInput = {
    create?: XOR<tbl_household_memberCreateWithoutApplicationInput, tbl_household_memberUncheckedCreateWithoutApplicationInput> | tbl_household_memberCreateWithoutApplicationInput[] | tbl_household_memberUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_household_memberCreateOrConnectWithoutApplicationInput | tbl_household_memberCreateOrConnectWithoutApplicationInput[]
    createMany?: tbl_household_memberCreateManyApplicationInputEnvelope
    connect?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
  }

  export type tbl_monthly_liabilityCreateNestedManyWithoutApplicationInput = {
    create?: XOR<tbl_monthly_liabilityCreateWithoutApplicationInput, tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput> | tbl_monthly_liabilityCreateWithoutApplicationInput[] | tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput | tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput[]
    createMany?: tbl_monthly_liabilityCreateManyApplicationInputEnvelope
    connect?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
  }

  export type tbl_household_memberUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<tbl_household_memberCreateWithoutApplicationInput, tbl_household_memberUncheckedCreateWithoutApplicationInput> | tbl_household_memberCreateWithoutApplicationInput[] | tbl_household_memberUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_household_memberCreateOrConnectWithoutApplicationInput | tbl_household_memberCreateOrConnectWithoutApplicationInput[]
    createMany?: tbl_household_memberCreateManyApplicationInputEnvelope
    connect?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
  }

  export type tbl_monthly_liabilityUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<tbl_monthly_liabilityCreateWithoutApplicationInput, tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput> | tbl_monthly_liabilityCreateWithoutApplicationInput[] | tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput | tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput[]
    createMany?: tbl_monthly_liabilityCreateManyApplicationInputEnvelope
    connect?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type tbl_household_memberUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<tbl_household_memberCreateWithoutApplicationInput, tbl_household_memberUncheckedCreateWithoutApplicationInput> | tbl_household_memberCreateWithoutApplicationInput[] | tbl_household_memberUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_household_memberCreateOrConnectWithoutApplicationInput | tbl_household_memberCreateOrConnectWithoutApplicationInput[]
    upsert?: tbl_household_memberUpsertWithWhereUniqueWithoutApplicationInput | tbl_household_memberUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: tbl_household_memberCreateManyApplicationInputEnvelope
    set?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    disconnect?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    delete?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    connect?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    update?: tbl_household_memberUpdateWithWhereUniqueWithoutApplicationInput | tbl_household_memberUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: tbl_household_memberUpdateManyWithWhereWithoutApplicationInput | tbl_household_memberUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: tbl_household_memberScalarWhereInput | tbl_household_memberScalarWhereInput[]
  }

  export type tbl_monthly_liabilityUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<tbl_monthly_liabilityCreateWithoutApplicationInput, tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput> | tbl_monthly_liabilityCreateWithoutApplicationInput[] | tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput | tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput[]
    upsert?: tbl_monthly_liabilityUpsertWithWhereUniqueWithoutApplicationInput | tbl_monthly_liabilityUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: tbl_monthly_liabilityCreateManyApplicationInputEnvelope
    set?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    disconnect?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    delete?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    connect?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    update?: tbl_monthly_liabilityUpdateWithWhereUniqueWithoutApplicationInput | tbl_monthly_liabilityUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: tbl_monthly_liabilityUpdateManyWithWhereWithoutApplicationInput | tbl_monthly_liabilityUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: tbl_monthly_liabilityScalarWhereInput | tbl_monthly_liabilityScalarWhereInput[]
  }

  export type tbl_household_memberUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<tbl_household_memberCreateWithoutApplicationInput, tbl_household_memberUncheckedCreateWithoutApplicationInput> | tbl_household_memberCreateWithoutApplicationInput[] | tbl_household_memberUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_household_memberCreateOrConnectWithoutApplicationInput | tbl_household_memberCreateOrConnectWithoutApplicationInput[]
    upsert?: tbl_household_memberUpsertWithWhereUniqueWithoutApplicationInput | tbl_household_memberUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: tbl_household_memberCreateManyApplicationInputEnvelope
    set?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    disconnect?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    delete?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    connect?: tbl_household_memberWhereUniqueInput | tbl_household_memberWhereUniqueInput[]
    update?: tbl_household_memberUpdateWithWhereUniqueWithoutApplicationInput | tbl_household_memberUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: tbl_household_memberUpdateManyWithWhereWithoutApplicationInput | tbl_household_memberUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: tbl_household_memberScalarWhereInput | tbl_household_memberScalarWhereInput[]
  }

  export type tbl_monthly_liabilityUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<tbl_monthly_liabilityCreateWithoutApplicationInput, tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput> | tbl_monthly_liabilityCreateWithoutApplicationInput[] | tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput | tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput[]
    upsert?: tbl_monthly_liabilityUpsertWithWhereUniqueWithoutApplicationInput | tbl_monthly_liabilityUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: tbl_monthly_liabilityCreateManyApplicationInputEnvelope
    set?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    disconnect?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    delete?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    connect?: tbl_monthly_liabilityWhereUniqueInput | tbl_monthly_liabilityWhereUniqueInput[]
    update?: tbl_monthly_liabilityUpdateWithWhereUniqueWithoutApplicationInput | tbl_monthly_liabilityUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: tbl_monthly_liabilityUpdateManyWithWhereWithoutApplicationInput | tbl_monthly_liabilityUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: tbl_monthly_liabilityScalarWhereInput | tbl_monthly_liabilityScalarWhereInput[]
  }

  export type tbl_home_improvement_applicationCreateNestedOneWithoutHousehold_membersInput = {
    create?: XOR<tbl_home_improvement_applicationCreateWithoutHousehold_membersInput, tbl_home_improvement_applicationUncheckedCreateWithoutHousehold_membersInput>
    connectOrCreate?: tbl_home_improvement_applicationCreateOrConnectWithoutHousehold_membersInput
    connect?: tbl_home_improvement_applicationWhereUniqueInput
  }

  export type tbl_home_improvement_applicationUpdateOneRequiredWithoutHousehold_membersNestedInput = {
    create?: XOR<tbl_home_improvement_applicationCreateWithoutHousehold_membersInput, tbl_home_improvement_applicationUncheckedCreateWithoutHousehold_membersInput>
    connectOrCreate?: tbl_home_improvement_applicationCreateOrConnectWithoutHousehold_membersInput
    upsert?: tbl_home_improvement_applicationUpsertWithoutHousehold_membersInput
    connect?: tbl_home_improvement_applicationWhereUniqueInput
    update?: XOR<XOR<tbl_home_improvement_applicationUpdateToOneWithWhereWithoutHousehold_membersInput, tbl_home_improvement_applicationUpdateWithoutHousehold_membersInput>, tbl_home_improvement_applicationUncheckedUpdateWithoutHousehold_membersInput>
  }

  export type tbl_home_improvement_applicationCreateNestedOneWithoutMonthly_liabilitiesInput = {
    create?: XOR<tbl_home_improvement_applicationCreateWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUncheckedCreateWithoutMonthly_liabilitiesInput>
    connectOrCreate?: tbl_home_improvement_applicationCreateOrConnectWithoutMonthly_liabilitiesInput
    connect?: tbl_home_improvement_applicationWhereUniqueInput
  }

  export type tbl_home_improvement_applicationUpdateOneRequiredWithoutMonthly_liabilitiesNestedInput = {
    create?: XOR<tbl_home_improvement_applicationCreateWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUncheckedCreateWithoutMonthly_liabilitiesInput>
    connectOrCreate?: tbl_home_improvement_applicationCreateOrConnectWithoutMonthly_liabilitiesInput
    upsert?: tbl_home_improvement_applicationUpsertWithoutMonthly_liabilitiesInput
    connect?: tbl_home_improvement_applicationWhereUniqueInput
    update?: XOR<XOR<tbl_home_improvement_applicationUpdateToOneWithWhereWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUpdateWithoutMonthly_liabilitiesInput>, tbl_home_improvement_applicationUncheckedUpdateWithoutMonthly_liabilitiesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type tbl_department_masterCreateWithoutUsersInput = {
    department_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_department_masterUncheckedCreateWithoutUsersInput = {
    id?: number
    department_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_department_masterCreateOrConnectWithoutUsersInput = {
    where: tbl_department_masterWhereUniqueInput
    create: XOR<tbl_department_masterCreateWithoutUsersInput, tbl_department_masterUncheckedCreateWithoutUsersInput>
  }

  export type tbl_designation_masterCreateWithoutUsersInput = {
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    teamMembers?: tbl_our_teamCreateNestedManyWithoutDesignationInput
  }

  export type tbl_designation_masterUncheckedCreateWithoutUsersInput = {
    id?: number
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    teamMembers?: tbl_our_teamUncheckedCreateNestedManyWithoutDesignationInput
  }

  export type tbl_designation_masterCreateOrConnectWithoutUsersInput = {
    where: tbl_designation_masterWhereUniqueInput
    create: XOR<tbl_designation_masterCreateWithoutUsersInput, tbl_designation_masterUncheckedCreateWithoutUsersInput>
  }

  export type tbl_department_masterUpsertWithoutUsersInput = {
    update: XOR<tbl_department_masterUpdateWithoutUsersInput, tbl_department_masterUncheckedUpdateWithoutUsersInput>
    create: XOR<tbl_department_masterCreateWithoutUsersInput, tbl_department_masterUncheckedCreateWithoutUsersInput>
    where?: tbl_department_masterWhereInput
  }

  export type tbl_department_masterUpdateToOneWithWhereWithoutUsersInput = {
    where?: tbl_department_masterWhereInput
    data: XOR<tbl_department_masterUpdateWithoutUsersInput, tbl_department_masterUncheckedUpdateWithoutUsersInput>
  }

  export type tbl_department_masterUpdateWithoutUsersInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_department_masterUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_designation_masterUpsertWithoutUsersInput = {
    update: XOR<tbl_designation_masterUpdateWithoutUsersInput, tbl_designation_masterUncheckedUpdateWithoutUsersInput>
    create: XOR<tbl_designation_masterCreateWithoutUsersInput, tbl_designation_masterUncheckedCreateWithoutUsersInput>
    where?: tbl_designation_masterWhereInput
  }

  export type tbl_designation_masterUpdateToOneWithWhereWithoutUsersInput = {
    where?: tbl_designation_masterWhereInput
    data: XOR<tbl_designation_masterUpdateWithoutUsersInput, tbl_designation_masterUncheckedUpdateWithoutUsersInput>
  }

  export type tbl_designation_masterUpdateWithoutUsersInput = {
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: tbl_our_teamUpdateManyWithoutDesignationNestedInput
  }

  export type tbl_designation_masterUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: tbl_our_teamUncheckedUpdateManyWithoutDesignationNestedInput
  }

  export type UserCreateWithoutDesignationInput = {
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    department?: tbl_department_masterCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDesignationInput = {
    id?: number
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    department_id?: number | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type UserCreateOrConnectWithoutDesignationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDesignationInput, UserUncheckedCreateWithoutDesignationInput>
  }

  export type UserCreateManyDesignationInputEnvelope = {
    data: UserCreateManyDesignationInput | UserCreateManyDesignationInput[]
    skipDuplicates?: boolean
  }

  export type tbl_our_teamCreateWithoutDesignationInput = {
    name: string
    our_team_image?: string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_our_teamUncheckedCreateWithoutDesignationInput = {
    id?: number
    name: string
    our_team_image?: string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_our_teamCreateOrConnectWithoutDesignationInput = {
    where: tbl_our_teamWhereUniqueInput
    create: XOR<tbl_our_teamCreateWithoutDesignationInput, tbl_our_teamUncheckedCreateWithoutDesignationInput>
  }

  export type tbl_our_teamCreateManyDesignationInputEnvelope = {
    data: tbl_our_teamCreateManyDesignationInput | tbl_our_teamCreateManyDesignationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDesignationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDesignationInput, UserUncheckedUpdateWithoutDesignationInput>
    create: XOR<UserCreateWithoutDesignationInput, UserUncheckedCreateWithoutDesignationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDesignationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDesignationInput, UserUncheckedUpdateWithoutDesignationInput>
  }

  export type UserUpdateManyWithWhereWithoutDesignationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDesignationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    department_id?: IntNullableFilter<"User"> | number | null
    designation_id?: IntNullableFilter<"User"> | number | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    is_deleted?: IntFilter<"User"> | number
    created_on?: DateTimeFilter<"User"> | Date | string
    updated_on?: DateTimeFilter<"User"> | Date | string
  }

  export type tbl_our_teamUpsertWithWhereUniqueWithoutDesignationInput = {
    where: tbl_our_teamWhereUniqueInput
    update: XOR<tbl_our_teamUpdateWithoutDesignationInput, tbl_our_teamUncheckedUpdateWithoutDesignationInput>
    create: XOR<tbl_our_teamCreateWithoutDesignationInput, tbl_our_teamUncheckedCreateWithoutDesignationInput>
  }

  export type tbl_our_teamUpdateWithWhereUniqueWithoutDesignationInput = {
    where: tbl_our_teamWhereUniqueInput
    data: XOR<tbl_our_teamUpdateWithoutDesignationInput, tbl_our_teamUncheckedUpdateWithoutDesignationInput>
  }

  export type tbl_our_teamUpdateManyWithWhereWithoutDesignationInput = {
    where: tbl_our_teamScalarWhereInput
    data: XOR<tbl_our_teamUpdateManyMutationInput, tbl_our_teamUncheckedUpdateManyWithoutDesignationInput>
  }

  export type tbl_our_teamScalarWhereInput = {
    AND?: tbl_our_teamScalarWhereInput | tbl_our_teamScalarWhereInput[]
    OR?: tbl_our_teamScalarWhereInput[]
    NOT?: tbl_our_teamScalarWhereInput | tbl_our_teamScalarWhereInput[]
    id?: IntFilter<"tbl_our_team"> | number
    name?: StringFilter<"tbl_our_team"> | string
    designation_id?: IntNullableFilter<"tbl_our_team"> | number | null
    our_team_image?: StringNullableFilter<"tbl_our_team"> | string | null
    status?: IntFilter<"tbl_our_team"> | number
    is_deleted?: IntFilter<"tbl_our_team"> | number
    created_on?: DateTimeFilter<"tbl_our_team"> | Date | string
    updated_on?: DateTimeFilter<"tbl_our_team"> | Date | string
  }

  export type UserCreateWithoutDepartmentInput = {
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    designation?: tbl_designation_masterCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    designation_id?: number | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type BlogCreateWithoutCategoryInput = {
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    blog_image?: string | null
    short_description: string
    blog_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    blog_image?: string | null
    short_description: string
    blog_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput>
  }

  export type BlogCreateManyCategoryInputEnvelope = {
    data: BlogCreateManyCategoryInput | BlogCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutCategoryInput, BlogUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutCategoryInput, BlogUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    meta_url?: StringFilter<"Blog"> | string
    meta_keyword?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    tag?: StringFilter<"Blog"> | string
    meta_description?: StringNullableFilter<"Blog"> | string | null
    category_id?: IntFilter<"Blog"> | number
    blog_image?: StringNullableFilter<"Blog"> | string | null
    short_description?: StringFilter<"Blog"> | string
    blog_content?: StringFilter<"Blog"> | string
    status?: IntFilter<"Blog"> | number
    is_deleted?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogCategoryCreateWithoutBlogsInput = {
    name: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCategoryUncheckedCreateWithoutBlogsInput = {
    id?: number
    name: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCategoryCreateOrConnectWithoutBlogsInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type BlogCategoryUpsertWithoutBlogsInput = {
    update: XOR<BlogCategoryUpdateWithoutBlogsInput, BlogCategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutBlogsInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutBlogsInput, BlogCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogCategoryUpdateWithoutBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCategoryUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_designation_masterCreateWithoutTeamMembersInput = {
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    users?: UserCreateNestedManyWithoutDesignationInput
  }

  export type tbl_designation_masterUncheckedCreateWithoutTeamMembersInput = {
    id?: number
    designation_name: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDesignationInput
  }

  export type tbl_designation_masterCreateOrConnectWithoutTeamMembersInput = {
    where: tbl_designation_masterWhereUniqueInput
    create: XOR<tbl_designation_masterCreateWithoutTeamMembersInput, tbl_designation_masterUncheckedCreateWithoutTeamMembersInput>
  }

  export type tbl_designation_masterUpsertWithoutTeamMembersInput = {
    update: XOR<tbl_designation_masterUpdateWithoutTeamMembersInput, tbl_designation_masterUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<tbl_designation_masterCreateWithoutTeamMembersInput, tbl_designation_masterUncheckedCreateWithoutTeamMembersInput>
    where?: tbl_designation_masterWhereInput
  }

  export type tbl_designation_masterUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: tbl_designation_masterWhereInput
    data: XOR<tbl_designation_masterUpdateWithoutTeamMembersInput, tbl_designation_masterUncheckedUpdateWithoutTeamMembersInput>
  }

  export type tbl_designation_masterUpdateWithoutTeamMembersInput = {
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDesignationNestedInput
  }

  export type tbl_designation_masterUncheckedUpdateWithoutTeamMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDesignationNestedInput
  }

  export type tbl_household_memberCreateWithoutApplicationInput = {
    name: string
    age: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_household_memberUncheckedCreateWithoutApplicationInput = {
    id?: number
    name: string
    age: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_household_memberCreateOrConnectWithoutApplicationInput = {
    where: tbl_household_memberWhereUniqueInput
    create: XOR<tbl_household_memberCreateWithoutApplicationInput, tbl_household_memberUncheckedCreateWithoutApplicationInput>
  }

  export type tbl_household_memberCreateManyApplicationInputEnvelope = {
    data: tbl_household_memberCreateManyApplicationInput | tbl_household_memberCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type tbl_monthly_liabilityCreateWithoutApplicationInput = {
    payee: string
    amount: string
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput = {
    id?: number
    payee: string
    amount: string
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_monthly_liabilityCreateOrConnectWithoutApplicationInput = {
    where: tbl_monthly_liabilityWhereUniqueInput
    create: XOR<tbl_monthly_liabilityCreateWithoutApplicationInput, tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput>
  }

  export type tbl_monthly_liabilityCreateManyApplicationInputEnvelope = {
    data: tbl_monthly_liabilityCreateManyApplicationInput | tbl_monthly_liabilityCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type tbl_household_memberUpsertWithWhereUniqueWithoutApplicationInput = {
    where: tbl_household_memberWhereUniqueInput
    update: XOR<tbl_household_memberUpdateWithoutApplicationInput, tbl_household_memberUncheckedUpdateWithoutApplicationInput>
    create: XOR<tbl_household_memberCreateWithoutApplicationInput, tbl_household_memberUncheckedCreateWithoutApplicationInput>
  }

  export type tbl_household_memberUpdateWithWhereUniqueWithoutApplicationInput = {
    where: tbl_household_memberWhereUniqueInput
    data: XOR<tbl_household_memberUpdateWithoutApplicationInput, tbl_household_memberUncheckedUpdateWithoutApplicationInput>
  }

  export type tbl_household_memberUpdateManyWithWhereWithoutApplicationInput = {
    where: tbl_household_memberScalarWhereInput
    data: XOR<tbl_household_memberUpdateManyMutationInput, tbl_household_memberUncheckedUpdateManyWithoutApplicationInput>
  }

  export type tbl_household_memberScalarWhereInput = {
    AND?: tbl_household_memberScalarWhereInput | tbl_household_memberScalarWhereInput[]
    OR?: tbl_household_memberScalarWhereInput[]
    NOT?: tbl_household_memberScalarWhereInput | tbl_household_memberScalarWhereInput[]
    id?: IntFilter<"tbl_household_member"> | number
    application_id?: IntFilter<"tbl_household_member"> | number
    name?: StringFilter<"tbl_household_member"> | string
    age?: IntFilter<"tbl_household_member"> | number
    created_on?: DateTimeFilter<"tbl_household_member"> | Date | string
    updated_on?: DateTimeFilter<"tbl_household_member"> | Date | string
  }

  export type tbl_monthly_liabilityUpsertWithWhereUniqueWithoutApplicationInput = {
    where: tbl_monthly_liabilityWhereUniqueInput
    update: XOR<tbl_monthly_liabilityUpdateWithoutApplicationInput, tbl_monthly_liabilityUncheckedUpdateWithoutApplicationInput>
    create: XOR<tbl_monthly_liabilityCreateWithoutApplicationInput, tbl_monthly_liabilityUncheckedCreateWithoutApplicationInput>
  }

  export type tbl_monthly_liabilityUpdateWithWhereUniqueWithoutApplicationInput = {
    where: tbl_monthly_liabilityWhereUniqueInput
    data: XOR<tbl_monthly_liabilityUpdateWithoutApplicationInput, tbl_monthly_liabilityUncheckedUpdateWithoutApplicationInput>
  }

  export type tbl_monthly_liabilityUpdateManyWithWhereWithoutApplicationInput = {
    where: tbl_monthly_liabilityScalarWhereInput
    data: XOR<tbl_monthly_liabilityUpdateManyMutationInput, tbl_monthly_liabilityUncheckedUpdateManyWithoutApplicationInput>
  }

  export type tbl_monthly_liabilityScalarWhereInput = {
    AND?: tbl_monthly_liabilityScalarWhereInput | tbl_monthly_liabilityScalarWhereInput[]
    OR?: tbl_monthly_liabilityScalarWhereInput[]
    NOT?: tbl_monthly_liabilityScalarWhereInput | tbl_monthly_liabilityScalarWhereInput[]
    id?: IntFilter<"tbl_monthly_liability"> | number
    application_id?: IntFilter<"tbl_monthly_liability"> | number
    payee?: StringFilter<"tbl_monthly_liability"> | string
    amount?: StringFilter<"tbl_monthly_liability"> | string
    created_on?: DateTimeFilter<"tbl_monthly_liability"> | Date | string
    updated_on?: DateTimeFilter<"tbl_monthly_liability"> | Date | string
  }

  export type tbl_home_improvement_applicationCreateWithoutHousehold_membersInput = {
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    monthly_liabilities?: tbl_monthly_liabilityCreateNestedManyWithoutApplicationInput
  }

  export type tbl_home_improvement_applicationUncheckedCreateWithoutHousehold_membersInput = {
    id?: number
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    monthly_liabilities?: tbl_monthly_liabilityUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type tbl_home_improvement_applicationCreateOrConnectWithoutHousehold_membersInput = {
    where: tbl_home_improvement_applicationWhereUniqueInput
    create: XOR<tbl_home_improvement_applicationCreateWithoutHousehold_membersInput, tbl_home_improvement_applicationUncheckedCreateWithoutHousehold_membersInput>
  }

  export type tbl_home_improvement_applicationUpsertWithoutHousehold_membersInput = {
    update: XOR<tbl_home_improvement_applicationUpdateWithoutHousehold_membersInput, tbl_home_improvement_applicationUncheckedUpdateWithoutHousehold_membersInput>
    create: XOR<tbl_home_improvement_applicationCreateWithoutHousehold_membersInput, tbl_home_improvement_applicationUncheckedCreateWithoutHousehold_membersInput>
    where?: tbl_home_improvement_applicationWhereInput
  }

  export type tbl_home_improvement_applicationUpdateToOneWithWhereWithoutHousehold_membersInput = {
    where?: tbl_home_improvement_applicationWhereInput
    data: XOR<tbl_home_improvement_applicationUpdateWithoutHousehold_membersInput, tbl_home_improvement_applicationUncheckedUpdateWithoutHousehold_membersInput>
  }

  export type tbl_home_improvement_applicationUpdateWithoutHousehold_membersInput = {
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_liabilities?: tbl_monthly_liabilityUpdateManyWithoutApplicationNestedInput
  }

  export type tbl_home_improvement_applicationUncheckedUpdateWithoutHousehold_membersInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_liabilities?: tbl_monthly_liabilityUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type tbl_home_improvement_applicationCreateWithoutMonthly_liabilitiesInput = {
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    household_members?: tbl_household_memberCreateNestedManyWithoutApplicationInput
  }

  export type tbl_home_improvement_applicationUncheckedCreateWithoutMonthly_liabilitiesInput = {
    id?: number
    application_no: string
    application_type: string
    active_step?: number
    is_draft?: number
    applicant_name?: string | null
    applicant_property?: string | null
    reside_address?: string | null
    email?: string | null
    phone_home?: string | null
    phone_work?: string | null
    phone_cell?: string | null
    applicant_employer_name?: string | null
    applicant_employer_address?: string | null
    coapplicant_employer_name?: string | null
    coapplicant_employer_address?: string | null
    has_mortgage?: string | null
    mortgagee?: string | null
    mortgage_amount?: string | null
    mortgage_balance?: string | null
    gross_annual_income?: string | null
    monthly_liabilities_total?: string | null
    property_owned_duration?: string | null
    number_of_units?: string | null
    taxes_paid?: string | null
    payment_status?: string | null
    total_persons?: string | null
    children_under_18?: string | null
    renovation_details?: string | null
    maintenance_plumbing?: boolean
    maintenance_electrical?: boolean
    maintenance_heating_cooling?: boolean
    maintenance_appliances?: boolean
    maintenance_doors_windows?: boolean
    maintenance_flooring_walls?: boolean
    maintenance_safety?: boolean
    maintenance_pest?: boolean
    maintenance_other_text?: string | null
    certification_signer_name?: string | null
    certification_signature?: string | null
    certification_datetime?: Date | string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
    household_members?: tbl_household_memberUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type tbl_home_improvement_applicationCreateOrConnectWithoutMonthly_liabilitiesInput = {
    where: tbl_home_improvement_applicationWhereUniqueInput
    create: XOR<tbl_home_improvement_applicationCreateWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUncheckedCreateWithoutMonthly_liabilitiesInput>
  }

  export type tbl_home_improvement_applicationUpsertWithoutMonthly_liabilitiesInput = {
    update: XOR<tbl_home_improvement_applicationUpdateWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUncheckedUpdateWithoutMonthly_liabilitiesInput>
    create: XOR<tbl_home_improvement_applicationCreateWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUncheckedCreateWithoutMonthly_liabilitiesInput>
    where?: tbl_home_improvement_applicationWhereInput
  }

  export type tbl_home_improvement_applicationUpdateToOneWithWhereWithoutMonthly_liabilitiesInput = {
    where?: tbl_home_improvement_applicationWhereInput
    data: XOR<tbl_home_improvement_applicationUpdateWithoutMonthly_liabilitiesInput, tbl_home_improvement_applicationUncheckedUpdateWithoutMonthly_liabilitiesInput>
  }

  export type tbl_home_improvement_applicationUpdateWithoutMonthly_liabilitiesInput = {
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    household_members?: tbl_household_memberUpdateManyWithoutApplicationNestedInput
  }

  export type tbl_home_improvement_applicationUncheckedUpdateWithoutMonthly_liabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_no?: StringFieldUpdateOperationsInput | string
    application_type?: StringFieldUpdateOperationsInput | string
    active_step?: IntFieldUpdateOperationsInput | number
    is_draft?: IntFieldUpdateOperationsInput | number
    applicant_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_property?: NullableStringFieldUpdateOperationsInput | string | null
    reside_address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_home?: NullableStringFieldUpdateOperationsInput | string | null
    phone_work?: NullableStringFieldUpdateOperationsInput | string | null
    phone_cell?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    applicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_name?: NullableStringFieldUpdateOperationsInput | string | null
    coapplicant_employer_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_mortgage?: NullableStringFieldUpdateOperationsInput | string | null
    mortgagee?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_amount?: NullableStringFieldUpdateOperationsInput | string | null
    mortgage_balance?: NullableStringFieldUpdateOperationsInput | string | null
    gross_annual_income?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_liabilities_total?: NullableStringFieldUpdateOperationsInput | string | null
    property_owned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_units?: NullableStringFieldUpdateOperationsInput | string | null
    taxes_paid?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    total_persons?: NullableStringFieldUpdateOperationsInput | string | null
    children_under_18?: NullableStringFieldUpdateOperationsInput | string | null
    renovation_details?: NullableStringFieldUpdateOperationsInput | string | null
    maintenance_plumbing?: BoolFieldUpdateOperationsInput | boolean
    maintenance_electrical?: BoolFieldUpdateOperationsInput | boolean
    maintenance_heating_cooling?: BoolFieldUpdateOperationsInput | boolean
    maintenance_appliances?: BoolFieldUpdateOperationsInput | boolean
    maintenance_doors_windows?: BoolFieldUpdateOperationsInput | boolean
    maintenance_flooring_walls?: BoolFieldUpdateOperationsInput | boolean
    maintenance_safety?: BoolFieldUpdateOperationsInput | boolean
    maintenance_pest?: BoolFieldUpdateOperationsInput | boolean
    maintenance_other_text?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signer_name?: NullableStringFieldUpdateOperationsInput | string | null
    certification_signature?: NullableStringFieldUpdateOperationsInput | string | null
    certification_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    household_members?: tbl_household_memberUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserCreateManyDesignationInput = {
    id?: number
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    department_id?: number | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_our_teamCreateManyDesignationInput = {
    id?: number
    name: string
    our_team_image?: string | null
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type UserUpdateWithoutDesignationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tbl_department_masterUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDesignationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutDesignationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_our_teamUpdateWithoutDesignationInput = {
    name?: StringFieldUpdateOperationsInput | string
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_our_teamUncheckedUpdateWithoutDesignationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_our_teamUncheckedUpdateManyWithoutDesignationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    our_team_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyDepartmentInput = {
    id?: number
    name: string
    email?: string | null
    contact?: string | null
    otp?: string | null
    otp_expires_at?: Date | string | null
    designation_id?: number | null
    image?: string | null
    password: string
    role?: string
    status?: number
    is_deleted?: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
    designation?: tbl_designation_masterUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    designation_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    designation_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyCategoryInput = {
    id?: number
    title: string
    meta_url: string
    meta_keyword: string
    author: string
    tag: string
    meta_description?: string | null
    blog_image?: string | null
    short_description: string
    blog_content: string
    status?: number
    is_deleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_url?: StringFieldUpdateOperationsInput | string
    meta_keyword?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    blog_image?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: StringFieldUpdateOperationsInput | string
    blog_content?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_household_memberCreateManyApplicationInput = {
    id?: number
    name: string
    age: number
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_monthly_liabilityCreateManyApplicationInput = {
    id?: number
    payee: string
    amount: string
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type tbl_household_memberUpdateWithoutApplicationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_household_memberUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_household_memberUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_monthly_liabilityUpdateWithoutApplicationInput = {
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_monthly_liabilityUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_monthly_liabilityUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    payee?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}