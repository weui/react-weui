declare module 'react-weui' {
  import React from "react";

  type PropsWithLabel<T> = React.HTMLProps<T> & {
    label: React.ReactNode;
  }

  type StyleType = 'ios' | 'android';

  type ComponentAllowedType = keyof React.ReactHTML;

  interface IActionSheetProps extends React.HTMLProps<Element> {
    menus?: PropsWithLabel<HTMLDivElement>[];
    actions?: PropsWithLabel<HTMLDivElement>[];
    show?: boolean;
    onRequestClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
    type?: StyleType;
  }

  interface IArticleProps extends React.HTMLProps<Element> { }

  interface IBadgeProps extends React.HTMLProps<Element> {
    dot?: boolean;
    preset?: 'default' | 'header' | 'body' | 'footer';
  }

  interface IButtonAreaProps extends React.HTMLProps<Element> {
    direction?: 'veritical' | 'horizontal';
  }

  interface IButtonProps extends React.HTMLProps<Element> {
    disabled?: boolean;
    type?: 'primary' | 'default' | 'warn' | 'vcode';
    size?: 'normal' | 'small';
  }

  interface CellsProps {
    access?: boolean;
  }

  interface IDialogProps extends React.HTMLProps<Element> {
    buttons?: PropsWithLabel<HTMLLinkElement>[];
    show?: boolean;
    title?: string;
    type?: StyleType;
    autoDectect?: boolean;
  }

  interface IFormCellProps extends React.HTMLProps<Element> {
    vcode?: boolean;
    warn?: boolean;
    radio?: boolean;
    checkbox?: boolean;
    switch?: boolean;
    select?: boolean;
    selectPos?: string;
  }

  interface IFormProps extends React.HTMLProps<Element> {
    radio?: boolean;
    checkbox?: boolean;
  }

  type OptionItemType = React.HTMLProps<HTMLOptionElement> & {
    label: React.ReactNode;
    value: string;
  }

  interface ISelectProps extends React.HTMLProps<Element> {
    data?: OptionItemType[];
  }

  interface ISliderProps extends React.HTMLProps<Element> {
    max?: number;
    min?: number;
    step?: number;
    showValue?: boolean;
    disabled?: boolean;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    snapToValue?: boolean;
  }

  interface ITextAreaProps extends React.HTMLProps<Element> {
    showCounter?: boolean;
    maxLength?: number;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  type UploaderFileType = {
    url: string;
    error?: boolean;
    status?: React.ReactNode;
    onClik?: (event: React.MouseEvent<HTMLLIElement>) => void;
  }

  interface IUploaderProps extends React.HTMLProps<Element> {
    title?: string;
    maxCount?: number;
    maxWidth?: number;
    onChange?: (file: File, event: ProgressEvent<FileReader>) => void;
    onError?: (message: React.ReactNode) => void;
    files?: UploaderFileType[];
    lang?: {
      maxError: (maxCount: string | number) => React.ReactNode
    };
    onFileClick?: (event: React.MouseEvent<HTMLLIElement>, file: File, index: number) => void;
  }

  interface IGalleryProps extends React.HTMLProps<Element> {
    show?: boolean;
    src?: string | string[];
    defaultIndex?: number;
  }

  interface IGridIconProps extends React.HTMLProps<Element> { }

  interface IGridLabelProps extends React.HTMLProps<Element> { }

  interface IGridProps extends React.HTMLProps<Element> {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    component?: ComponentAllowedType;
  }

  interface IGridsProps extends React.HTMLProps<Element> {
    data?: IGridProps[];
  }

  type WeuiIconType =
    | 'circle'
    | 'success'
    | 'success-circle'
    | 'success-no-circle'
    | 'success-no-circle-thin'
    | 'warn'
    | 'info-circle'
    | 'waiting-circle'
    | 'download'
    | 'search'
    | 'cancel'
    | 'clear'
    | 'arrow-bold'
    | 'arrow'
    | 'close'
    | 'close-thin'
    | 'back-arrow'
    | 'back-arrow-thin'
    | 'back'
    | 'back-circle'
    | 'loading'

  interface IIconProps extends React.HTMLProps<Element> {
    value?: WeuiIconType;
    size?: 'small' | 'large';
    primary?: boolean;
  }

  interface IInfiniteLoaderProps extends React.HTMLProps<Element> {
    height?: string;
    loaderDefaultIcon?: React.ReactNode;
    loaderLoadingIcon?: React.ReactNode;
    triggerPercent?: number;
    onScroll?: (event: React.UIEvent<HTMLElement>) => any;
    onScrollEnd?: () => void;
    onLoadMore?: (resolved: () => void, finished: () => void) => void;
    disable?: boolean;
    resetStatus?: boolean;
  }

  interface IMaskProps extends React.HTMLProps<Element> {
    transparent?: boolean;
  }

  interface IPanelBodyProps extends React.HTMLProps<Element> { }

  interface IMediaBoxDescriptionProps extends React.HTMLProps<Element> { }

  interface IMediaBoxHeaderProps extends React.HTMLProps<Element> { }

  interface IMediaBoxInfoMetaProps extends React.HTMLProps<Element> {
    extra?: boolean;
  }

  interface IMediaBoxInfoProps extends React.HTMLProps<Element> {
    data?: IMediaBoxInfoMetaProps & {
      label: React.ReactNode;
    };
  }

  interface IMediaBoxTitleProps extends React.HTMLProps<Element> {
  }

  interface IMediaBoxProps extends React.HTMLProps<Element> {
    type?: 'appmsg' | 'text' | 'small_appmsg';
  }

  interface IMsgProps extends React.HTMLProps<Element> {
    type?: WeuiIconType;
    buttons?: PropsWithLabel<HTMLLinkElement>[];
    title?: string;
    description?: string;
    extraHref?: string;
    extraText?: string;
    footer?: () => React.ReactNode;
  }

  interface IPageProps extends React.HTMLProps<Element> {
    ptr?: boolean;
    ptrOnRefresh?: (onfulfilled: () => void, onfailed: () => void) => void;
    infiniteLoader?: boolean;
    onLoadMore?: (resolved: () => void, finished: () => void) => void;
    transition?: boolean;
  }

  interface IPanelBodyProps extends React.HTMLProps<Element> { }

  interface IPanelFooterProps extends React.HTMLProps<Element> { }

  interface IPanelHeaderProps extends React.HTMLProps<Element> { }

  interface IPanelProps extends React.HTMLProps<Element> {
    access?: boolean;
  }

  interface ICityPickerProps extends React.HTMLProps<Element> {
    data: object[];
    dataMap?: Record<string, string>;
    selected?: number[] | number;
    show?: boolean;
    lang?: { leftBtn: React.ReactNode, rightBtn: React.ReactNode };
    onCancel?: (text: string) => void;
    onChange?: any;
  }

  type PickerItemType = {
    [key: string]: React.ReactNode;
    disabled?: boolean;
  }

  interface IPickerGroupProps extends React.HTMLProps<Element> {
    height?: number;
    itemHeight?: number;
    indicatorTop?: number;
    indicatorHeight?: number;
    onChange?: (item: PickerItemType, selected: number, groupIndex: number) => void;
    aniamtion?: boolean;
    groupIndex?: number;
    defaultIndex?: number;
    items?: PickerItemType[];
    mapKeys?: {
      label: string;
    };
  }

  interface IPickerProps extends React.HTMLProps<Element> {
    actions?: PropsWithLabel<React.HTMLProps<HTMLLinkElement>>[];
    groups?: Omit<IPickerGroupProps, 'onChange' | 'groupIndex' | 'defaultIndex'>[];
    defaultSelect?: number[];
    onGroupChange?: (item: PickerItemType, index: number, groupIndex: number, selected: number[]) => void;
    onChange?: (selected: number[]) => void;
    onCancel?: (event: React.MouseEvent<HTMLDivElement>) => void;
    show?: boolean;
    lang?: { leftBtn: React.ReactNode, rightBtn: React.ReactNode };
  }

  interface IPopupProps extends React.HTMLProps<Element> {
    show?: boolean;
    enableMask?: boolean;
  }

  interface IPullToRefreshProps extends React.HTMLProps<Element> {
    height?: string;
    loaderHeight?: number;
    loaderDefaultIcon?: (progress: number) => React.ReactNode;
    loaderLoadingIcon?: React.ReactNode;
    onRefresh?: (onfulfilled: () => void, onfailed: () => void) => void;
    disable?: boolean;
  }

  interface ISearchBarProps extends React.HTMLProps<Element> {
    defaultValue?: string;
    placeholder?: string;
    searchName?: string;
    onChange?: (text: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: (event: React.MouseEvent<HTMLLinkElement>) => void;
    onCancel?: (event: React.MouseEvent<HTMLLinkElement>) => void;
    onSubmit?: (text: string, event: React.FormEvent<HTMLFormElement>) => void;
    lang?: {
      cancel: string;
    };
    autocomplete?: string;
  }

  interface ISwiperProps extends React.HTMLProps<Element> {
    height?: number;
    width?: number;
    threshold?: number;
    speed?: number;
    defaultIndex?: number;
    direction?: "vertical" | "horizontal";
    indicators?: boolean;
    onChange?: (prevIndex: number, nextIndex: number) => void;
  }

  interface INavBarItemProps extends React.HTMLProps<Element> {
    active?: boolean;
    label?: string;
  }

  interface INavBarProps extends React.HTMLProps<Element> { }

  interface ITabBodyItemProps extends React.HTMLProps<Element> {
    active?: boolean;
  }

  interface ITabBodyProps extends React.HTMLProps<Element> {
    active?: boolean;
  }

  interface ITabProps extends React.HTMLProps<Element> {
    type?: string;
    defaultIndex?: number;
    onChange?: (index: number) => void;
  }

  interface ITabBarIconProps extends React.HTMLProps<Element> { }

  interface ITabBarItemProps extends React.HTMLProps<Element> {
    active?: boolean;
    icon?: React.ReactNode;
    label?: string;
  }

  interface ITabBarLabelProps extends React.HTMLProps<Element> { }

  interface ITabBarProps extends React.HTMLProps<Element> { }

  interface IToastProps extends React.HTMLProps<Element> {
    icon?: WeuiIconType;
    iconSize?: string;
    show?: boolean;
  }

  export class ActionSheet extends React.Component<IActionSheetProps> { }
  export class Article extends React.Component<IArticleProps> { }
  export class Badge extends React.Component<IBadgeProps> { }
  export class ButtonArea extends React.Component<IButtonAreaProps> { }
  export class Button extends React.Component<IButtonProps> { }
  export class Dialog extends React.Component<IDialogProps> { }
  export class FormCell extends React.Component<IFormCellProps> { }
  export class Form extends React.Component<IFormProps> { }
  export class Select extends React.Component<ISelectProps> { }
  export class Slider extends React.Component<ISliderProps> { }
  export class TextArea extends React.Component<ITextAreaProps> { }
  export class Uploader extends React.Component<IUploaderProps> { }
  export class Gallery extends React.Component<IGalleryProps> { }
  export class GridIcon extends React.Component<IGridIconProps> { }
  export class GridLabel extends React.Component<IGridLabelProps> { }
  export class Grid extends React.Component<IGridProps> { }
  export class Grids extends React.Component<IGridsProps> { }
  export class Icon extends React.Component<IIconProps> { }
  export class InfiniteLoader extends React.Component<IInfiniteLoaderProps> { }
  export class Mask extends React.Component<IMaskProps> { }
  export class PanelBody extends React.Component<IPanelBodyProps> { }
  export class MediaBoxDescription extends React.Component<IMediaBoxDescriptionProps> { }
  export class MediaBoxHeader extends React.Component<IMediaBoxHeaderProps> { }
  export class MediaBoxInfoMeta extends React.Component<IMediaBoxInfoMetaProps> { }
  export class MediaBoxInfo extends React.Component<IMediaBoxInfoProps> { }
  export class MediaBoxTitle extends React.Component<IMediaBoxTitleProps> { }
  export class MediaBox extends React.Component<IMediaBoxProps> { }
  export class Msg extends React.Component<IMsgProps> { }
  export class Page extends React.Component<IPageProps> { }
  export class PanelBody extends React.Component<IPanelBodyProps> { }
  export class PanelFooter extends React.Component<IPanelFooterProps> { }
  export class PanelHeader extends React.Component<IPanelHeaderProps> { }
  export class Panel extends React.Component<IPanelProps> { }
  export class CityPicker extends React.Component<ICityPickerProps> { }
  export class PickerGroup extends React.Component<IPickerGroupProps, PickerGroupState> { }
  export class Picker extends React.Component<IPickerProps, PickerState> { }
  export class Popup extends React.Component<IPopupProps> { }
  export class PullToRefresh extends React.Component<IPullToRefreshProps> { }
  export class SearchBar extends React.Component<ISearchBarProps, SearchBarState> { }
  export class Swiper extends React.Component<ISwiperProps, SwiperState> { }
  export class NavBarItem extends React.Component<INavBarItemProps> { }
  export class NavBar extends React.Component<INavBarProps> { }
  export class TabBodyItem extends React.Component<ITabBodyItemProps> { }
  export class TabBody extends React.Component<ITabBodyProps> { }
  export class Tab extends React.Component<ITabProps, TabState> { }
  export class TabBarIcon extends React.Component<ITabBarIconProps> { }
  export class TabBarItem extends React.Component<ITabBarItemProps> { }
  export class TabBarLabel extends React.Component<ITabBarLabelProps> { }
  export class TabBar extends React.Component<ITabBarProps> { }
  export class Toast extends React.Component<IToastProps> { }

  interface PreviewButtonProps extends React.HTMLProps<HTMLLinkElement> {
    primary?: boolean;
  }

  interface CellBodyProps extends React.HTMLProps<HTMLDivElement> {
    primary?: boolean;
  }

  interface CellFooterProps extends React.HTMLProps<HTMLDivElement> {
    primary?: boolean;
  }

  interface CellHeaderProps extends React.HTMLProps<HTMLDivElement> {
    primary?: boolean;
  }

  interface CellProps extends React.HTMLProps<HTMLDivElement | HTMLLabelElement | HTMLLinkElement> {
    access?: boolean;
    link?: boolean;
    component?: ComponentAllowedType;
  }

  interface CellsTipsProps extends React.HTMLProps<HTMLDivElement> { }

  interface CellsTitleProps extends React.HTMLProps<HTMLDivElement> { }

  interface CellsProps extends React.HTMLProps<HTMLDivElement> {
    access?: boolean;
  }

  interface FlexItemProps extends React.HTMLProps<HTMLDivElement> {
    Component?: ComponentAllowedType;
  }

  interface FlexProps extends React.HTMLProps<HTMLDivElement> { }

  interface FooterLinkProps extends React.HTMLProps<HTMLLinkElement> { }

  interface FooterLinksProps extends React.HTMLProps<HTMLParagraphElement> { }

  interface FooterTextProps extends React.HTMLProps<HTMLParagraphElement> { }

  interface FooterProps extends React.HTMLProps<HTMLDivElement> { }

  interface AgreementProps extends React.HTMLProps<HTMLInputElement> { }

  interface CheckboxProps extends React.HTMLProps<HTMLInputElement> { }

  interface InputProps extends React.HTMLProps<HTMLInputElement> {
    defaultValue?: string;
  }

  interface PreviewBodyProps extends React.HTMLProps<HTMLDivElement> { }

  interface PreviewFooterProps extends React.HTMLProps<HTMLDivElement> { }

  interface PreviewHeaderProps extends React.HTMLProps<HTMLDivElement> { }

  interface PreviewItemProps extends React.HTMLProps<HTMLDivElement> {
    label?: string;
    value?: string;
  }

  interface PreviewProps extends React.HTMLProps<HTMLDivElement> { }

  interface RadioProps extends React.HTMLProps<HTMLInputElement> { name: string; }

  interface SwitchProps extends React.HTMLProps<HTMLInputElement> { }

  interface VCodeProps extends React.HTMLProps<HTMLImageElement> { }

  interface GalleryDeleteProps extends React.HTMLProps<HTMLLinkElement> { }

  interface LabelProps extends React.HTMLProps<HTMLLabelElement> { }

  interface LoadMoreProps extends React.HTMLProps<HTMLDivElement> {
    loading?: boolean;
    showLine?: boolean;
    showDot?: boolean;
  }

  interface PopupHeaderProps extends React.HTMLProps<HTMLDivElement> {
    left?: string;
    right?: string;
    leftOnClick?: (event: React.MouseEvent<HTMLLinkElement>) => void;
    rightOnClick?: (event: React.MouseEvent<HTMLLinkElement>) => void;
  }

  interface ProgressProps extends React.HTMLProps<HTMLDivElement> {
    value?: number;
    showCancel?: boolean;
  }

  interface ToptipsProps extends React.HTMLProps<HTMLDivElement> {
    show?: boolean;
    type?: 'default' | 'warn' | 'info' | 'primary';
  }

  export const PreviewButton: React.FC<PreviewButtonProps>
  export const CellBody: React.FC<CellBodyProps>
  export const CellFooter: React.FC<CellFooterProps>
  export const CellHeader: React.FC<CellHeaderProps>
  export const Cell: React.FC<CellProps>
  export const CellsTips: React.FC<CellsTipsProps>
  export const CellsTitle: React.FC<CellsTitleProps>
  export const Cells: React.FC<CellsProps>
  export const FlexItem: React.FC<FlexItemProps>
  export const Flex: React.FC<FlexProps>
  export const FooterLink: React.FC<FooterLinkProps>
  export const FooterLinks: React.FC<FooterLinksProps>
  export const FooterText: React.FC<FooterTextProps>
  export const Footer: React.FC<FooterProps>
  export const Agreement: React.FC<AgreementProps>
  export const Checkbox: React.FC<CheckboxProps>
  export const Input: React.FC<InputProps>
  export const PreviewBody: React.FC<PreviewBodyProps>
  export const PreviewFooter: React.FC<PreviewFooterProps>
  export const PreviewHeader: React.FC<PreviewHeaderProps>
  export const PreviewItem: React.FC<PreviewItemProps>
  export const Preview: React.FC<PreviewProps>
  export const Radio: React.FC<RadioProps>
  export const Switch: React.FC<SwitchProps>
  export const VCode: React.FC<VCodeProps>
  export const GalleryDelete: React.FC<GalleryDeleteProps>
  export const Label: React.FC<LabelProps>
  export const LoadMore: React.FC<LoadMoreProps>
  export const PopupHeader: React.FC<PopupHeaderProps>
  export const Progress: React.FC<ProgressProps>
  export const Toptips: React.FC<ToptipsProps>
}