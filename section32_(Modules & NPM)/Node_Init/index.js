import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const langCode = franc(process.argv[2], { minLength: 3 });

if (langCode !== "und") {
	const language = langs.where("3", langCode);
	if (language) {
		console.log(colors.green(`My Best Guess Is: ${language.name}`));
	} else {
		console.log(
			colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`),
		);
	}
} else {
	console.log(
		colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"),
	);
}
