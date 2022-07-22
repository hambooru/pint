with open("formatted.txt", "a") as f:
    x = open("colors.txt", "r")
    prev_line = ""

    for current_line in x:
        if prev_line.split("=>")[0].strip() != current_line.split("=>")[0].strip():
            f.write("\n")
        f.write(current_line)
        prev_line = current_line

    x.close()
