export interface ImageType {
  id: string;
  file: string;
  altText: string;
  description?: string;
  artistName: string;
  artistUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}