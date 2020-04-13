import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatTabsModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatExpansionModule, MatRadioModule, MatGridListModule, MatTooltipModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule, 
    MatGridListModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule, 
    MatGridListModule,
    MatTooltipModule
  ],
})
export class CustomMaterialModule { }