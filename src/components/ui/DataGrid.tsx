import React from 'react';
import { motion } from 'framer-motion';

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface DataGridProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

export function DataGrid<T extends { id: string | number }>({ data, columns, onRowClick }: DataGridProps<T>) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10 bg-white/5 text-agro-muted uppercase text-xs tracking-wider">
            {columns.map((col, idx) => (
              <th key={idx} className="p-4 font-medium" style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onRowClick && onRowClick(item)}
              className={`border-b border-white/5 hover:bg-white/5 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((col, cIdx) => (
                <td key={cIdx} className="p-4 text-sm text-agro-text">
                  {col.render ? col.render(item) : (item as any)[col.key]}
                </td>
              ))}
            </motion.tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="p-8 text-center text-agro-muted">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
