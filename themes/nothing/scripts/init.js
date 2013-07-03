$(function() {
    translateDates();
    translateDisqus();
})

function translateDates() {
    $(".date").each(function(i,e) {
        var replacement = $(e).html().toLowerCase()
            .replace('monday', 'måndag')
            .replace('tuesday', 'tisdag')
            .replace('wednesday', 'onsdag')
            .replace('thursday', 'torsdag')
            .replace('friday', 'fredag')
            .replace('saturday', 'lördag')
            .replace('sunday', 'söndag')

            .replace('january', 'januari')
            .replace('febuary', 'februari')
            .replace('march', 'mars')
            .replace('may', 'maj')
            .replace('june', 'juni')
            .replace('july', 'juli')
            .replace('august', 'augusti')
            .replace('october', 'oktober');
        $(e).html(replacement);
    })
}

function translateDisqus() {
    var text = $(".comments a").html();
    text = text
        .replace("Comments", "kommentarer")
        .replace("Comment", "kommentar")
        .replace(" and ", " och ")
        .replace("Reactions", "reaktioner")
        .replace("Reaction", "reaktion")
    $(".comments a").html("Det finns " + text);
}