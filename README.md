# worldwiki
A random generator for RPG world wiki pages. This is mostly just for personal use, though if my friends express interest I'll probably make it more generalized and easier to use.

Basically, a bunch of tables defined in JSON will be rolled on, and the results exported to mostly blank wiki pages with infoboxes.

Stretch goal is to have them link to eachother, not sure if that's needed or whether I'll do it.

It would be really cool to procedurally generate town maps on inkarnate. What I'm creeping up on here is procedurally generating RPG worlds complete with maps, etc


## Example of Wiki infobox markdown
- Looks like the "|" is used to separate different fields.

~~~
{{Infobox_location|title = Antiris|image = antiris.png|imagecaption = "Honor above all."|map = antiris_map.png|type = Nation|location = Continent of [[Allu]]|inhabitants = Mostly [[Humans]] and [[Dwarves]], all races welcome}}
~~~
