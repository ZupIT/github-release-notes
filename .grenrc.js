module.exports = {
    "prefix": "Release ",
    "data-source":"prs",
    "only-milestones":true,
    "groupBy": {
        "Enhancements:": ["release-notes-enhancement"],
        "Bug Fixes:": ["release-notes-bug"],
        "Release": ["release-notes"]
    },
    "template": {
        "issue": "- [{{text}}]({{url}}) {{name}}",
        "commit": "- {{message}}"
    }
};
