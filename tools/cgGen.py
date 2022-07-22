with open("schemeGroups.js", "a") as f:
    x = open("colors.txt", "r")
    prev_line = ""
    prevComparison = ""
    groupNumber = 0

    for current_line in x:
        value = current_line.split("=>")[0].strip()
        varName = current_line.split("=>")[0].strip().replace("#", "")
        if prev_line.split("=>")[0].strip() != current_line.split("=>")[0].strip():
            if prevComparison != value[0:7]:
                groupNumber += 1
                alphaValue = 0
                f.write(
                    "]\n\n// color group: "
                    + str(groupNumber)
                    + " | default color: "
                    + value
                    + "\nexport var cg"
                    + str(groupNumber)
                    + "_"
                    + varName
                    + " = [\n"
                )
            else:
                f.write(
                    "]\n\n// color group: "
                    + str(groupNumber)
                    + " | default color: "
                    + value
                    + "\nexport var cg"
                    + str(groupNumber)
                    + "a_"
                    + value[7:9]
                    + " = [\n"
                )
        f.write('"' + current_line.split("=>")[1].strip() + '",\n')
        prev_line = current_line
        prevComparison = value[0:7]

    x.close()
