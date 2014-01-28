/**
 * Created by User on 1/23/14.
 */

$('.thumb').click(function () {
    if (this.tabIndex > 0)
        var curTab = $('.nav .active'),
            newTab,
            renameClass;

        switch(this.tabIndex) {
            case 1:
                //go to aboutMe
                newTab = $('.about-me');
                renameClass = ((curTab.attr("class")).split(" "))[0];
                curTab.attr("class", renameClass);
                newTab.attr("class", "about-me active");
                break;
            case 2:
                //go to resume
                newTab = $('.resume');
                renameClass = ((curTab.attr("class")).split(" "))[0];
                curTab.attr("class", renameClass);
                newTab.attr("class", "resume active");
                break;
            case 3:
                //go to music
                newTab = $('.music');
                renameClass = ((curTab.attr("class")).split(" "))[0];
                curTab.attr("class", renameClass);
                newTab.attr("class", "music active");
                break;
            default:
                break;
        }

});