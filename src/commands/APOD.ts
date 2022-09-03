import axios from "axios";
import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import { APODResponse } from "../interfaces/APODResponse";

@Discord()
export class Example {
  @Slash({
    name: "nasa",
    description: "Sends Nasa's Astronomy Picture of The Day!",
  })
  async APOD(interaction: CommandInteraction) {
    const apodResponse = await axios.get<APODResponse>(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_TOKEN}`
    );
    const response = await axios.get<Buffer>(apodResponse.data.hdurl, {
      responseType: "arraybuffer",
    });
    const image = response.data;
    await interaction.reply({
      files: [image],
      content: `Date: ${apodResponse.data.date}\nExplanation: ${apodResponse.data.explanation}`,
    });
  }
}
