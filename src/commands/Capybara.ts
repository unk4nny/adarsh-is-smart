import axios from "axios";
import {
  CommandInteraction,
} from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class Example {
  @Slash({ name: "capybara", description: "Send a cute capybara!" })
  async capy(interaction: CommandInteraction) {
    const response = await axios.get("https://api.capy.lol/v1/capybara/", {
      responseType: "arraybuffer",
    });
    const image = response.data;
    await interaction.reply({ files: [image] });
  }
}