import React from "react";
import { Box, Text, Heading, Button, VStack, Textarea, Divider } from "@chakra-ui/react";
import { FaFileCsv, FaChartBar } from "react-icons/fa";

const Index = () => {
  const handleFileUpload = (event) => {
    // In a real application, you would handle the CSV file here.
    console.log(event.target.files);
  };

  const analyzeData = () => {
    // In a real application, you would analyze the CSV data here.
    console.log("Analyze data");
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          NPS Analysis Tool
        </Heading>
        <Text>Upload your Net Promoter Score (NPS) data in CSV format, and click on 'Analyze' to get the summary.</Text>
        <Button as="label" leftIcon={<FaFileCsv />} colorScheme="teal" variant="solid">
          Upload CSV File
          <input type="file" hidden onChange={handleFileUpload} accept=".csv" />
        </Button>
        <Button leftIcon={<FaChartBar />} colorScheme="green" onClick={analyzeData}>
          Analyze
        </Button>
        <Divider />
        <Heading as="h2" size="lg">
          Summary
        </Heading>
        <Textarea isReadOnly placeholder="Summary will be shown here after analysis..." />
      </VStack>
    </Box>
  );
};

export default Index;
