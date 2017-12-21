import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CharacterSheetComponent } from "./swn/character-sheet/character-sheet.component";
import { StatsComponent } from "./swn/character-sheet/stats/stats.component";
import { InfoComponent } from "./swn/character-sheet/info/info.component";
import { SkillsComponent } from "./swn/character-sheet/skills/skills.component";
import { AttributesComponent } from "./swn/character-sheet/attributes/attributes.component";
import { GoalsComponent } from "./swn/character-sheet/goals/goals.component";
import { GoalComponent } from "./swn/character-sheet/goals/goal/goal.component";
import { NotesComponent } from "./swn/character-sheet/notes/notes.component";
import { ArmorsComponent } from "./swn/character-sheet/armors/armors.component";
import { ArmorComponent } from "./swn/character-sheet/armors/armor/armor.component";
import { AttributeComponent } from "./swn/character-sheet/attributes/attribute/attribute.component";
import { WeaponsComponent } from "./swn/character-sheet/weapons/weapons.component";
import { FociComponent } from "./swn/character-sheet/foci/foci.component";
import { WeaponComponent } from "./swn/character-sheet/weapons/weapon/weapon.component";
import { SkillComponent } from "./swn/character-sheet/skills/skill/skill.component";
import { EditToggleButtonComponent } from "./basic-components/edit-toggle-components/edit-toggle-button/edit-toggle-button.component";
import { EditToggleListComponent } from "./basic-components/edit-toggle-components/index";

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    InfoComponent,
    SkillsComponent,
    AttributesComponent,
    GoalsComponent,
    GoalComponent,
    NotesComponent,
    ArmorsComponent,
    ArmorComponent,
    CharacterSheetComponent,
    AttributeComponent,
    WeaponsComponent,
    FociComponent,
    WeaponComponent,
    SkillComponent,
    EditToggleButtonComponent,
    EditToggleListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
