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
}
