import fs from 'fs';
import path from 'path';

const srcDirectory = './src';
const outputFilename = 'src_file_list_with_content.txt'; // Changed output filename to avoid overwriting previous list
const projectRoot = process.cwd(); // Get the current working directory (project root)

console.log(`Starting traversal of directory: ${path.resolve(srcDirectory)}`);
console.log(`Output will be written to: ${outputFilename}`);

/**
 * Recursively traverses a directory and lists file paths and contents.
 * @param {string} currentDir - The current directory being traversed.
 * @param {fs.WriteStream} outputStream - The write stream for the output file.
 */
function listFilesWithContent(currentDir, outputStream) {
  try {
    const entries = fs.readdirSync(currentDir);

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry);
      const stats = fs.statSync(fullPath);

      if (stats.isFile()) {
        // Calculate the path relative to the project root
        const relativePath = path.relative(projectRoot, fullPath);

        try {
          // Read file content
          const fileContent = fs.readFileSync(fullPath, { encoding: 'utf-8' });

          // Write path, separator, content, and another separator to the output file
          outputStream.write(`--- FILE PATH: ${relativePath} ---\n`);
          outputStream.write(fileContent);
          outputStream.write('\n--- END OF FILE: ' + relativePath + ' ---\n\n'); // Add extra newline for separation

        } catch (readError) {
          console.error(`Error reading file ${relativePath}: ${readError.message}`);
          outputStream.write(`--- FILE PATH: ${relativePath} ---\n`);
          outputStream.write(`Error reading file content: ${readError.message}\n`);
          outputStream.write('\n--- END OF FILE: ' + relativePath + ' ---\n\n');
        }

      } else if (stats.isDirectory()) {
        // Recursively call for subdirectories
        listFilesWithContent(fullPath, outputStream);
      }
    }
  } catch (error) {
    // Handle errors during traversal (e.g., permission denied)
    console.error(`Error accessing directory ${currentDir}: ${error.message}`);
  }
}

// Main execution block
try {
  // Create a write stream to the output file
  const outputStream = fs.createWriteStream(outputFilename, { encoding: 'utf-8' });

  // Start the traversal from the src directory
  listFilesWithContent(srcDirectory, outputStream);

  // Close the stream when done
  outputStream.end(() => {
    console.log(`Successfully created ${outputFilename}.`);
  });

  // Handle potential errors with the stream
  outputStream.on('error', (err) => {
    console.error(`An error occurred while writing to the file: ${err.message}`);
  });

} catch (error) {
  // Handle initial errors (e.g., src directory not found)
  if (error.code === 'ENOENT') {
    console.error(`Error: The directory '${srcDirectory}' was not found.`);
  } else {
    console.error(`An unexpected error occurred: ${error.message}`);
  }
}
