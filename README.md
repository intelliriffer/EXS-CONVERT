# EXS-CONVERT
**Basic Workflow / scripts to Convert Apple Logic EXS (AutoSampled) Instruments to Other Formats Such as Akai Force/MPC Keygroups, Korg WaveState/ModWave multisamples or sfz instruments.**

## Requirements
1. Mac Operating System.
2. **NodeJs** Installed. Download Current from  [https://nodejs.org/en/](https://nodejs.org/en/)
3. **Sox** installed on your system
   1. If you have homebrew install using command: brew install sox
   2. or you can install from [MacPorts](https://ports.macports.org/port/sox/)
4. [EXS2SFZ App for MacOS](https://www.bjoernbojahr.de/exs2sfz.html)
5. [Convert With Moss App for MacOs](http://mossgrabers.de/Software/ConvertWithMoss/ConvertWithMoss.html)

## How it Works
1. We First Convert EXS instruments to SFZ format using EXS2SFZ.
2. Next Using the Script (STEP2.sh), The Aif Files are converted to Wav files (Using Sox) and A new SFZ file is created with aif references replaced with WAV references. All the Files are Generated in the CONVERT-WITH-MOSS Directory.
3. Using Convert With Moss and Using sfz as source Format, you can convert to any destination format supported by ConvertWithMoss Tool.

##Instructions (Suggested Workflow)
1. Create Your AutoSampled EXS instruments using Logic/Mainstage.
2. Copy the EXS files to the EXS Folder in this archive.
3. Run EXS2SFZ
   1. Click Load EXS and Browse this EXS Directory and OPen one of the EXS files
   2. All other EXS files will also Load in the Progam (List View)
   3. Choose Option **...no path offset** and **check Copy Samples to SFZ-Directory**
   4. Click **Export SFZ**
   5. Repeat Steps 3-4 for Other Exs Files in List View.
   6. If you Followed All Steps Correctly the sfz files and the Required samples Should have been copied to same EXS directory.
4. Run the **STEP2.sh** script from terminal or double clicking it. If it does not run, your might need to open terminal and make it executable using the command: chmod +x STEP2.sh
5. This STEP2.sh Script Will Convert All SFZ files and .aif samples to .WAV and Save to CONVERT-WITH-MOSS Directory.
6. Run ConvertWithMoss App on this Folder, Choose SFZ as Source Type and Browse/Select  the CONVERT-WITH-MOSS Folder. 
7. Choose a Destination Directory and Format and then Use Convert to Convert All to your Desired Format.
8. After Testing The Converted Files, you can delete the Files in EXS and CONVERT-WITH-MOSS directory to cleanup.





