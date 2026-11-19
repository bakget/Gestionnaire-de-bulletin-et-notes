const fs=require("fs");fs.mkdirSync("www/libs",{recursive:true});
[["jspdf/dist/jspdf.umd.min.js","jspdf.umd.min.js"],["jspdf-autotable/dist/jspdf.plugin.autotable.min.js","jspdf.plugin.autotable.min.js"],["html2canvas/dist/html2canvas.min.js","html2canvas.min.js"],["pdfjs-dist/build/pdf.min.js","pdf.min.js"],["pdfjs-dist/build/pdf.worker.min.js","pdf.worker.min.js"]].forEach(([a,b])=>fs.copyFileSync("node_modules/"+a,"www/libs/"+b));
console.log("libs copiées");
