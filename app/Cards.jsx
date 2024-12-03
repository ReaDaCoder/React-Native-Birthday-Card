import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
// import {
//     TableRow,
//     TableHeaderCell,
//     TableHeader,
//     TableFooter,
//     TableCell,
//     TableBody,
//     Table,
//   } from 'semantic-ui-react'
  

export default function Cards(){
    return(
        <SafeAreaView>
            <Table size='small'>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      
    </TableBody>
  </Table>
        </SafeAreaView>
    )
}