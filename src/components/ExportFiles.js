import * as FileSaver from 'file-saver';
import React from 'react'
// import { jsPDF } from "jspdf";

const ExportFiles = ({ filteredGraphLegend, excelData, fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ExcelJS = require('exceljs');
    const exportToExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Ingresos');
        const wsGastos = workbook.addWorksheet('Gastos');

        // Aplicar estilo al encabezado libro gastos
        wsGastos.getColumn(1).width = 27;
        wsGastos.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        wsGastos.getRow(1).font = { bold: true };
        wsGastos.columns = [
            { header: 'Categorias', key: 'categorias', width: 27 },
            { header: 'Valores', key: 'valores', width: 10 },
        ];

        // Agregar datos gastos
        filteredGraphLegend.forEach((data) => {
            wsGastos.addRow([data.nombre]).font = { bold: true };
            wsGastos.addRow([]);
            data.subExpenses.forEach((item) => {
                wsGastos.addRow([item.id, item.value]);
            });
            wsGastos.addRow([]);
        });

        // Aplicar estilo al encabezado libro ingresos
        worksheet.getColumn(1).width = 27;
        worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        worksheet.getRow(1).font = { bold: true };
        worksheet.columns = [
            { header: 'Categorias', key: 'categorias', width: 27 },
            { header: 'Valores', key: 'valores', width: 10 },
        ];

        // Agregar datos incomes
        excelData.forEach((data) => {
            worksheet.addRow([data.nombre]).font = { bold: true };
            data.subExpenses.forEach((item) => {
                worksheet.addRow([item.id, item.value]);
            });
            worksheet.addRow([]);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: fileType });
        FileSaver.saveAs(blob, fileName + fileExtension);
    };

    // const exportToPDF = async () => {
    //     const doc = new jsPDF("p", "pt");
    //     doc.setFont("Arial", "normal");
    //     doc.setFontSize(10);

    //     excelData.forEach((data) => {
    //         doc.text(data.nombre, 20, 30); // Assuming data.nombre is a string
    //         doc.text("", 20, 30);
    //         data.subExpenses.forEach((item) => {
    //             doc.text([item.id.toString(), item.value.toString()], 20, 30); // Convert to strings
    //             doc.text("", 20, 30);
    //         });
    //         doc.text("", 20, 30); // Passing an empty string
    //     });

    //     doc.save(`archivo.pdf`);
    // };
    return (
        <>
            <div className='m-1 d-inline-block'>
                <button
                    onClick={(e) => exportToExcel(fileName)}
                    className="btn btn-success">
                    Descargar Excel
                </button>
            </div>
            {/* <div className='m-1 d-inline-block'>
                <button
                    onClick={exportToPDF}
                    className="btn btn-danger"
                >
                    Descargar PDF
                </button>
            </div> */}
        </>
    )
}

export default ExportFiles

