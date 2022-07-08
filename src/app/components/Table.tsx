import React from 'react';
import {
  Table as TableChakraUI,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { hideCpf, moneyFormatMask } from '../../core/utils/mask';
import { Plus } from './Icon';

interface Transaction {
  id: string;
  source_bank: string;
  source_cpf: string;
  amount: number;
  target_account_id: string;
  created_at: string;
}

interface TableProps {
  title: string;
  columns: string[];
  rows: Transaction[];
  size?: string;
}

function Table({
  title, columns, rows, size = 'md',
}: TableProps) {
  return (
    <TableContainer border="1px" borderColor="gray.200" rounded="lg">
      <TableChakraUI size={size} variant="simple" colorScheme="blackAlpha" mt={-4}>
        <TableCaption placement="top" fontWeight="semibold" p={5} fontSize="lg">{title}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column: string) => (
              <Th key={column}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {
            rows.map(({
              source_bank, source_cpf, source_branch, created_at, amount,
            }: any) => (
              <Tr key={Math.floor(Math.random() * (10000) + 1)}>
                <Td color="gray.500">{source_bank}</Td>
                <Td color="gray.500">{hideCpf(source_cpf)}</Td>
                <Td color="gray.500">{source_branch}</Td>
                <Td color="gray.500">
                  {new Date(created_at).toLocaleString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}

                </Td>

                <Td color="gray.500" flex="row" align="center">
                  <div className="flex items-center gap-1 bg-green-600 py-2 px-4 rounded-3xl text-white font-medium">
                    <Plus />
                    R$
                    {' '}
                    {moneyFormatMask(amount)}
                  </div>
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </TableChakraUI>
      {!rows.length && <div className="flex items-center justify-center text-center py-4 font-medium text-gray-500">Você não possui transações no momento.</div>}
    </TableContainer>
  );
}

export default Table;
