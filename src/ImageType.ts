export interface ImageType {
  id: string;
  filename: string;
  originalName: string;
  description?: string;
  alt: string;
  fileSize: number;
  mimetype: string;
  dimensions: {
    width: number;
    height: number;
  };
  uploadedAt: Date;
  tags: string[];
  system?: string; // Reference to the System this image belongs to
}
