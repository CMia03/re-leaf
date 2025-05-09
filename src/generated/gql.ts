/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetProducts($page: Int!, $pageSize: Int, $sort: [String]) {\n    products(pagination: { page: $page, pageSize: $pageSize }, sort: $sort) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n        pageCount\n        pageSize\n        page\n      }\n    }\n  }\n": typeof types.GetProductsDocument,
    "\n  query GetProductsByCategory(\n    $page: Int!\n    $pageSize: Int\n    $subCategoryId: ID!\n    $currentProductId: ID!\n  ) {\n    products(\n      pagination: { page: $page, pageSize: $pageSize }\n      filters: {\n        subcategory_id: { documentId: { eq: $subCategoryId } }\n        documentId: { ne: $currentProductId }\n      }\n    ) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n      }\n    }\n  }\n": typeof types.GetProductsByCategoryDocument,
    "\n  query GetProduct($documentId: ID!) {\n    product(documentId: $documentId) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n  }\n": typeof types.GetProductDocument,
};
const documents: Documents = {
    "\n  query GetProducts($page: Int!, $pageSize: Int, $sort: [String]) {\n    products(pagination: { page: $page, pageSize: $pageSize }, sort: $sort) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n        pageCount\n        pageSize\n        page\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProductsByCategory(\n    $page: Int!\n    $pageSize: Int\n    $subCategoryId: ID!\n    $currentProductId: ID!\n  ) {\n    products(\n      pagination: { page: $page, pageSize: $pageSize }\n      filters: {\n        subcategory_id: { documentId: { eq: $subCategoryId } }\n        documentId: { ne: $currentProductId }\n      }\n    ) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n      }\n    }\n  }\n": types.GetProductsByCategoryDocument,
    "\n  query GetProduct($documentId: ID!) {\n    product(documentId: $documentId) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts($page: Int!, $pageSize: Int, $sort: [String]) {\n    products(pagination: { page: $page, pageSize: $pageSize }, sort: $sort) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n        pageCount\n        pageSize\n        page\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts($page: Int!, $pageSize: Int, $sort: [String]) {\n    products(pagination: { page: $page, pageSize: $pageSize }, sort: $sort) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n        pageCount\n        pageSize\n        page\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductsByCategory(\n    $page: Int!\n    $pageSize: Int\n    $subCategoryId: ID!\n    $currentProductId: ID!\n  ) {\n    products(\n      pagination: { page: $page, pageSize: $pageSize }\n      filters: {\n        subcategory_id: { documentId: { eq: $subCategoryId } }\n        documentId: { ne: $currentProductId }\n      }\n    ) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductsByCategory(\n    $page: Int!\n    $pageSize: Int\n    $subCategoryId: ID!\n    $currentProductId: ID!\n  ) {\n    products(\n      pagination: { page: $page, pageSize: $pageSize }\n      filters: {\n        subcategory_id: { documentId: { eq: $subCategoryId } }\n        documentId: { ne: $currentProductId }\n      }\n    ) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n\n    products_connection(pagination: { page: $page, pageSize: $pageSize }) {\n      pageInfo {\n        total\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProduct($documentId: ID!) {\n    product(documentId: $documentId) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($documentId: ID!) {\n    product(documentId: $documentId) {\n      documentId\n      slug\n      name\n      description\n      vehicle_type\n      availability\n      price\n      cover_image {\n        documentId\n        url\n        width\n        height\n      }\n      images {\n        url\n        width\n        height\n      }\n      size\n      weight\n      createdAt\n      publishedAt\n      subcategory_id {\n        documentId\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;