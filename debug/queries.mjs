import { createSupabaseClient } from './supabaseClient.mjs';

// Add your own query functions below. Exported functions become runnable via run.mjs.

const DEFAULT_SCHEMAS = ['public'];

export async function countRows({ table, schema, useServiceRole = true } = {}) {
  if (!table) throw new Error('Pass { table } to countRows');
  const client = createSupabaseClient({ schema, useServiceRole });

  const { error, count } = await client
    .from(table)
    .select('*', { count: 'estimated', head: true });

  if (error) throw error;
  return { table, count };
}

export async function sampleRows({ table, limit = 5, schema, useServiceRole = true } = {}) {
  if (!table) throw new Error('Pass { table } to sampleRows');
  const client = createSupabaseClient({ schema, useServiceRole });

  const { data, error } = await client.from(table).select('*').limit(limit);
  if (error) throw error;
  return data;
}

export async function listTables({
  schemas = DEFAULT_SCHEMAS,
  includeViews = true,
  includeMaterialized = true,
  useServiceRole = true,
} = {}) {
  const client = createSupabaseClient({ schema: 'information_schema', useServiceRole });
  const types = ['BASE TABLE'];
  if (includeViews) types.push('VIEW');
  if (includeMaterialized) types.push('MATERIALIZED VIEW');

  let query = client
    .from('tables')
    .select('table_schema, table_name, table_type')
    .order('table_schema')
    .order('table_name')
    .in('table_type', types);

  if (schemas?.length) {
    query = query.in('table_schema', schemas);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function listColumns({ schemas = DEFAULT_SCHEMAS, useServiceRole = true } = {}) {
  const client = createSupabaseClient({ schema: 'information_schema', useServiceRole });
  let query = client
    .from('columns')
    .select(
      'table_schema, table_name, column_name, data_type, is_nullable, column_default, ordinal_position'
    )
    .order('table_schema')
    .order('table_name')
    .order('ordinal_position');

  if (schemas?.length) {
    query = query.in('table_schema', schemas);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function schemaSummary({ schemas = DEFAULT_SCHEMAS, useServiceRole = true } = {}) {
  const [tables, columns] = await Promise.all([
    listTables({ schemas, includeViews: true, includeMaterialized: true, useServiceRole }),
    listColumns({ schemas, useServiceRole }),
  ]);

  const columnsByTable = columns.reduce((acc, col) => {
    const key = `${col.table_schema}.${col.table_name}`;
    acc[key] = acc[key] || [];
    acc[key].push({
      name: col.column_name,
      type: col.data_type,
      nullable: col.is_nullable === 'YES',
      default: col.column_default,
      position: col.ordinal_position,
    });
    return acc;
  }, {});

  const tablesWithColumns = tables.map((table) => {
    const key = `${table.table_schema}.${table.table_name}`;
    return {
      schema: table.table_schema,
      name: table.table_name,
      type: table.table_type,
      columns: columnsByTable[key] || [],
    };
  });

  return { schemas, tables: tablesWithColumns };
}

// Template: copy/paste and customize for new queries
export async function templateQuery({ schema, useServiceRole = true, ...args } = {}) {
  const client = createSupabaseClient({ schema, useServiceRole });
  // Write your query here, e.g.:
  // const { data, error } = await client.from('your_table').select('*').eq('id', args.id);
  // if (error) throw error;
  // return data;
  return { note: 'Replace templateQuery with your own logic', args };
}
