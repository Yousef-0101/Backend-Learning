import figlet from "figlet";
import colors from "colors";

async function doStuff() {
	const text = await figlet.text("Huzzah");
	console.log(text.green);
}

doStuff();
