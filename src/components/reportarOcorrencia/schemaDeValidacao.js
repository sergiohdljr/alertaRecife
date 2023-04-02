import { z } from "zod";

export const schemaPost = z.object({
  ocorrencia: z.string().min(1, { message: "Descreva a ocorrência" }),
  ocorrenciaPhotoURL: z.any().optional(),
});
