function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selected  Index].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    if (memberValue == "member") {
        if (memberSkillsValue == "memberSkills") {
            alert("Please select a skill");
            return false;
        }
        else {
            alert("You have selected " + memberText + " with " + memberSkillsText + " skills");
            return true;
        }
    }
    else {
        alert("Please select a member");
        return false;
    }
}