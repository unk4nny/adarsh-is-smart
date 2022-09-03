import axios from "axios";
import { CommandInteraction, GuildMember, User } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
export class Example {
  @Slash({ name: "avatar", description: "Get a users avatar!" })
  async avi(
    @SlashOption({
      name: "user",
      description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      required: false,
    })
    user: User,
    interaction: CommandInteraction
  ) {
    if (user) {
      const avatar = user.displayAvatarURL();
      await interaction.reply(avatar ?? "No avatar found");
    } else {
      const avatar = (interaction.member as GuildMember)?.displayAvatarURL();
      await interaction.reply(avatar ?? "No avatar found");
    }
  }
}
