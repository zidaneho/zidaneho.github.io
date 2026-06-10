import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Download } from "lucide-react";
import NavBar from "../components/NavBar";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function Resume() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
        <NavBar includeHome={true}></NavBar>
      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hollow2 text-hollow4 hover:bg-hollow3 transition-colors"
      >
        <Download size={18} />
        Download PDF
      </a>
    <Document file="/resume.pdf">
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    </div>
  );
}
export default Resume;
