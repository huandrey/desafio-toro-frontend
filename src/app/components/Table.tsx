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

interface TableProps {
  title: string;
  columns: string[];
  rows: object[];
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
              sourceCpf, targetName, date, value,
            }: any) => (
              <Tr key={Math.floor(Math.random() * (10000) + 1)}>
                <Td color="gray.500">{sourceCpf}</Td>
                <Td color="gray.500">{targetName}</Td>
                <Td color="gray.500">{date}</Td>
                <Td color="gray.500">{value}</Td>
              </Tr>
            ))
          }
        </Tbody>
      </TableChakraUI>
    </TableContainer>
  );
}

export default Table;
