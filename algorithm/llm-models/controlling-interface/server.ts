import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());

const MODELS_FILE_PATH = join(__dirname, '../data/models.json');

// GET all models
app.get('/api/models', (req, res) => {
    try {
        const data = readFileSync(MODELS_FILE_PATH, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading models file:', error);
        res.status(500).json({ error: 'Failed to read models file' });
    }
});

// POST update models
app.post('/api/models', (req, res) => {
    try {
        const newContent = req.body;
        // Basic validation to ensure it has the models array
        if (!newContent || !Array.isArray(newContent.models)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        // Preserve generatedAt timestamp or update it? Let's update it to now
        newContent.generatedAt = new Date().toISOString();
        newContent.totalModels = newContent.models.length;

        writeFileSync(MODELS_FILE_PATH, JSON.stringify(newContent, null, 2));
        res.json({ success: true, message: 'Models updated successfully', data: newContent });
    } catch (error) {
        console.error('Error writing models file:', error);
        res.status(500).json({ error: 'Failed to save models file' });
    }
});

const ARCHIVE_FILE_PATH = join(__dirname, '../data/archived-models.json');

// GET archived models
app.get('/api/archive', (req, res) => {
    try {
        // Create if doesn't exist
        try {
            const data = readFileSync(ARCHIVE_FILE_PATH, 'utf-8');
            res.json(JSON.parse(data));
        } catch (e) {
            // If file not found, return empty structure
            const emptyArchive = { generatedAt: new Date().toISOString(), totalModels: 0, models: [] };
            writeFileSync(ARCHIVE_FILE_PATH, JSON.stringify(emptyArchive, null, 2));
            res.json(emptyArchive);
        }
    } catch (error) {
        console.error('Error reading archive file:', error);
        res.status(500).json({ error: 'Failed to read archive file' });
    }
});

// POST update archived models
app.post('/api/archive', (req, res) => {
    try {
        const newContent = req.body;
        if (!newContent || !Array.isArray(newContent.models)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        newContent.generatedAt = new Date().toISOString();
        newContent.totalModels = newContent.models.length;

        writeFileSync(ARCHIVE_FILE_PATH, JSON.stringify(newContent, null, 2));
        res.json({ success: true, message: 'Archive updated successfully', data: newContent });
    } catch (error) {
        console.error('Error writing archive file:', error);
        res.status(500).json({ error: 'Failed to save archive file' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api/models`);
});
