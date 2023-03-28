# Node runner

Simple image for executing node tasks inside a container.

The image will run `npm i --prefer-offline --no-audit` befor it run your script.

## Images:

| **Node version** | **image** |
|-|-|
| 14 | ghcr.io/scarbous/node-runner/14 |
| 16 | ghcr.io/scarbous/node-runner/16 |
| 18 | ghcr.io/scarbous/node-runner/18 |
| 19 | ghcr.io/scarbous/node-runner/19 |

## Usage

Mount the your app to `/src`.
By default the Image will run the script `dev` which is defined in the `package.json` in your project-root.

### Environment variables

| **Name** | **Info** |
|-|-|
| **DIR** | The dir which contains your `package.json` |
| **TASK** | Name of the script to run |


# GitHub docker action

The action runs the configured script from your `package.json`.

## Inputs

| **Name** | **Default** | **Info** |
|-|-|-|
| **DIR** | `"/"` | The dir which contains your `package.json` |
| **TASK** | `"build"` | Name of the script to run |

## Example usage

In this example the runner will execute the `build` script inside the Build dir.

```yaml
steps:
  - uses: Scarbous/node-runner@1.0.6
    with:
      dir: Build
      task: build
```
