

local position = std.extVar("position");
local to = std.extVar("to");
local delay = std.extVar("delay");
local subject = std.extVar("subject");

local completion_answer = std.parseJson(arakoo.native("openAIChatting")({position:position}));
local completion_send = std.parseJson(arakoo.native("emailSender")({to:to, subject: subject, text: completion_answer, delay: delay}));
completion_send