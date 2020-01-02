import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipModule } from './tooltip.module';
import { TooltipContentComponent } from './tooltip.component';
import { StyleTypes } from './style-types.enum';
import { PlacementTypes, AlignmentTypes, PositionHelper } from '../../utils';

describe('TooltipContentComponent', () => {
  let component: TooltipContentComponent;
  let fixture: ComponentFixture<TooltipContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipContentComponent],
      imports: [TooltipModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipContentComponent);
    component = fixture.componentInstance;

    component.type = StyleTypes.tooltip;
    component.placement = PlacementTypes.bottom;
    component.alignment = AlignmentTypes.left;
    component.showCaret = true;
    component.spacing = 0;
    component.host = {
      nativeElement: {
        getBoundingClientRect: () => ({
          height: 10,
          width: 10
        }) as any
      } as any
    };

    spyOn(component.element.nativeElement, 'getBoundingClientRect').and.returnValue({
      wdith: 10,
      height: 10
    });

    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onWindowResize', () => {
    it('should reposition', () => {
      const spy = spyOn(component, 'position');
      component.onWindowResize();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('position', () => {
    it('should do nothing if no bounding box', () => {
      const spy = spyOn(PositionHelper, 'positionContent');
      component.host = { nativeElement: document.createElement('div') };
      component.position();
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not position caret', () => {
      const spy = spyOn(PositionHelper, 'positionCaret');
      component.showCaret = false;
      component.position();
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
