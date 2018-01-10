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
import { FocusComponent } from "./swn/character-sheet/foci/focus/focus.component";
import { WeaponComponent } from "./swn/character-sheet/weapons/weapon/weapon.component";
import { SkillComponent } from "./swn/character-sheet/skills/skill/skill.component";
import {
  ListRemoveButtonComponent,
  EditToggleButtonComponent,
  ListAddButtonComponent
} from "./basic-components/edit-toggle-components/index";
import { HttpClientModule } from "@angular/common/http";
import {
  ArmorDataService,
  CyberwareDataService,
  FocusDataService,
  SkillDataService,
  WeaponDataService
} from "./swn/data-files/index";
import { CyberwaresComponent } from "./swn/character-sheet/cyberwares/cyberwares.component";
import { CyberwareComponent } from "./swn/character-sheet/cyberwares/cyberware/cyberware.component";
import { FinancesComponent } from "./swn/character-sheet/finances/finances.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EquipmentComponent } from "./swn/character-sheet/equipment/equipment.component";
import { EquipmentItemComponent } from "./swn/character-sheet/equipment/equipment-item/equipment-item.component";
import { EquipmentDataService } from "./swn/data-files/equipment-data-service";
import { TechniquesComponent } from "./swn/character-sheet/techniques/techniques.component";
import { TechniqueComponent } from "./swn/character-sheet/techniques/technique/technique.component";
import { TechniqueDataService } from "./swn/data-files/technique-data-service";
import { EffortComponent } from "./swn/character-sheet/stats/effort/effort.component";
import { DropboxService } from "./services/dropbox.service";
import { CookieModule } from "ngx-cookie";

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
    FocusComponent,
    WeaponComponent,
    SkillComponent,
    CyberwaresComponent,
    CyberwareComponent,
    EditToggleButtonComponent,
    FinancesComponent,
    ListAddButtonComponent,
    ListRemoveButtonComponent,
    EquipmentComponent,
    EquipmentItemComponent,
    TechniquesComponent,
    TechniqueComponent,
    EffortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [
    ArmorDataService,
    CyberwareDataService,
    EquipmentDataService,
    FocusDataService,
    SkillDataService,
    TechniqueDataService,
    WeaponDataService,
    DropboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
