# Critical Rules
- [ ] Escape Strings — In JSON string fields, escape quotes as \" and newlines as \n.
- [ ] References Use [[type:id]] syntax for references:
    - [ ] [[p:p3]] — product
    - [ ] [[v:v5]] — version
    - [ ] [[c:c1]] — collab
    - [ ] [[a:a1]] — agent
    - [ ] [[u:u1]] — user (human collaborator)
- [ ] JSON Only — Return valid JSON matching the schema. No markdown fences, no commentary.
- [ ] Valid IDs Only — Use only IDs provided in context:
    - [ ] Products: from product tree (p1, p2...)
    - [ ] Versions: from version history (v1, v2...)
    - [ ] Collabs: from feedback lists (c1, c2...)
    - [ ] Agents: from team reference (a1, a2,…)
    - [ ] Users: from user list (u1, u2...)
    - [ ] Never invent IDs.

