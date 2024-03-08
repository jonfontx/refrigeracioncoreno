import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, HStack, VStack, Heading } from "@chakra-ui/react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import courseraFront from "../images/Coursera SHZLA7EPHD3U.pdf"
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const CredentialsSection = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
          };
        }, []);

        return (
            <FullScreenSection
            id="credentialsSection"
            backgroundColor="rgb(82, 27, 65)"
            isDarkBackground
            p={8}
            py={16}
            alignItems="flex-start"
            spacing={8}
     >
        <Heading as="h1">
            Credentials
        </Heading>
            <Box id="certificates"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridGap={{base:0,lg:20}}
            style={{zIndex:1}}
            >
            <Box id="certificateBox">
            <HStack className="pdfbox" borderRadius={16} overflow="hidden" width={750}>
                <Document file={courseraFront}>
                <Page pageNumber={1} className="pdf-page"/>
                </Document>
            </HStack>
            </Box>
            <VStack py={{base:0 ,lg:150}}>
                <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="632cc7f1-ebe6-4bae-be05-ba2cba6fed79"
                data-share-badge-host="https://www.credly.com"
                ></div>
            </VStack>
        </Box>
    </FullScreenSection>
  );
};


export default CredentialsSection;