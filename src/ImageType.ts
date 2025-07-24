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
  // Legacy fields for backward compatibility
  file?: string;
  altText?: string;
  artistName?: string;
  artistUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}