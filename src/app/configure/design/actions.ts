"use server";

import { db } from "@/db";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

export type SaveConfigArgs = {
  color: CaseColor;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
};

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  console.log("SaveConfig args:", { color, finish, material, model, configId });

  try {
    await db.configuration.update({
      where: { id: configId },
      data: {
        color,
        finish,
        material,
        model,
      },
    });
    console.log("Configuration saved successfully.");
  } catch (error) {
    console.error("Error saving configuration:", error);
    throw error;
  }
}
