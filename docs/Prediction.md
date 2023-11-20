# Predictions

- Stored in _[Collection](https://discord.js.org/docs/packages/collection/stable/Collection:Class)_ <[Id](#id), [Prediction](#prediction-class)>

## ID {#id}

The collection ID is a string, that is formatted to replace " " with "\_" and be limted to 15 characters.

You can make IDs easily via the `makeID(str)` method in `/common-functions/makeid.js`.

## Prection Class {#prediction-class}

The Prediction class holds all of the predictions data.

The Prediction class is declared in `/classes/prediction.js`.

The prediction class has 22 values:

- `prompt`: The prompt for the prediction.
- `option1`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option2`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option3`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option4`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option5`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option6`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option7`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option8`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option9`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option10`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option11`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option12`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option13`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option14`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option15`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option16`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option17`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option18`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option19`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `option20`: An [Option](#option-class) for the prediction. `null` if none was provided.
- `endtime`: A unix timestamp for when the prediction closes.

## Option Class {#option-class}

The Prediction class holds all of the prediction option data.

The Prediction class is declared in `/classes/option.js`.

The prediction class has 2 values:

- `option`: The text of the option.
- `users`: An array of _[GuildMember](https://old.discordjs.dev/#/docs/discord.js/14.14.0/class/GuildMember)_ that have voted for this option. `null` if none was provided.
