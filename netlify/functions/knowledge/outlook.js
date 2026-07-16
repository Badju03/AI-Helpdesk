steps: [

{
    id:1,

    question:"Which Outlook issue are you experiencing?",

    buttons:[
        "Cannot Send Email",
        "Cannot Receive Email",
        "Outlook Won't Open",
        "Password Prompt",
        "Shared Mailbox",
        "Search Not Working",
        "Calendar",
        "Outlook Slow"
    ],

    answers:{
        "cannot send email":2,
        "cannot receive email":10,
        "outlook won't open":20,
        "password prompt":30,
        "shared mailbox":40,
        "search not working":50,
        "calendar":60,
        "outlook slow":70
    }
},

{
    id:2,

    question:"Are you using Outlook Desktop or Outlook Web?",

    buttons:[
        "Desktop",
        "Outlook Web"
    ],

    answers:{
        desktop:3,
        "outlook web":3
    }

},

{
    id:3,

    diagnosis:
"Check:\n\n• Internet connection\n• Outbox folder\n• Exchange Online Service Health\n• Mailbox quota\n• SMTP authentication\n\nIf an error appears, type the exact error message."

},

{
    id:10,

    diagnosis:
"Check:\n\n• Internet connection\n• Mailbox quota\n• Focused Inbox\n• Junk Folder\n• Exchange Online Service Health"

},

{
    id:20,

    diagnosis:
"Try:\n\n• Safe Mode\n• New Outlook profile\n• Office Repair\n• Disable COM Add-ins"

},

{
    id:30,

    diagnosis:
"Possible causes:\n\n• Password changed\n• MFA required\n• Credential Manager cache\n• Modern Authentication"

},

{
    id:40,

    diagnosis:
"Verify:\n\n• Shared mailbox permissions\n• Auto-mapping\n• Outlook restart\n• OWA access"

},

{
    id:50,

    diagnosis:
"Rebuild the Outlook Search Index.\n\nIf still failing:\n\n• Restart Windows Search Service\n• Repair Office"

},

{
    id:60,

    diagnosis:
"Verify:\n\n• Calendar permissions\n• Time zone\n• Cached Exchange Mode"

},

{
    id:70,

    diagnosis:
"Try:\n\n• Disable Add-ins\n• Compact PST\n• Create new profile\n• Repair Office"

}
]
