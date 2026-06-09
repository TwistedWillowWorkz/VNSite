import { Component } from '@angular/core';
import { DefinitionSection } from '../../shared/definition-section/definition-section';
import { WhatIsVellichorNookSection } from '../../shared/what-is-vellichor-nook-section/what-is-vellichor-nook-section';
import { AnnounceSection } from '../../shared/announce-section/announce-section';
import { DifferenceSection } from '../../shared/difference-section/difference-section';
import { CallToActionSection } from '../../shared/call-to-action-section/call-to-action-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    DefinitionSection,
    WhatIsVellichorNookSection,
    AnnounceSection,
    DifferenceSection,
    CallToActionSection
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
