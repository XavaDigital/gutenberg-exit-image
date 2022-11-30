import classnames from "classnames";
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	BlockIcon,
} from "@wordpress/block-editor";
import {
	Placeholder,
	Button,
	PanelBody,
	Spinner,
	ResponsiveWrapper,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const { compose } = wp.compose;
const { withSelect } = wp.data;

const ImageSelectorEdit = (props) => {
	const { attributes, setAttributes, bgImage } = props;
	const ALLOWED_MEDIA_TYPES = ["image"];
	const { imageId } = attributes;

	const instructions = (
		<p>
			{__(
				"To edit the background image, you need permission to upload media.",
				"exit-image"
			)}
		</p>
	);

	// let styles = {};
	// if (bgImage && bgImage.source_url) {
	// 	styles = { backgroundImage: `url(${bgImage.source_url})` };
	// }

	const blockProps = useBlockProps({
		className: classnames({
			// [`has-text-align-${align}`]: align,
		}),
	});

	const onUpdateImage = (image) => {
		setAttributes({
			imageId: image.id,
			imageURL: image.url,
		});
	};

	const imageControls = (
		<div className="wp-block-exit-image-image">
			<MediaUploadCheck fallback={instructions}>
				<MediaUpload
					title={__("Background image", "exit-image")}
					onSelect={onUpdateImage}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					value={imageId}
					render={({ open }) => (
						<Button
							className={
								!imageId
									? "editor-post-featured-image__toggle"
									: "editor-post-featured-image__preview"
							}
							onClick={open}
						>
							{!imageId && __("Set background image", "exit-image")}
							{!!imageId && !bgImage && <Spinner />}
							{!!imageId && bgImage && (
								<ResponsiveWrapper
									naturalWidth={bgImage.media_details.width}
									naturalHeight={bgImage.media_details.height}
								>
									<img
										src={bgImage.source_url}
										alt={__("Background image", "exit-image")}
									/>
								</ResponsiveWrapper>
							)}
						</Button>
					)}
				/>
			</MediaUploadCheck>
		</div>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Background settings", "exit-image")}
					initialOpen={true}
				>
					{imageControls}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<Placeholder
					icon={<BlockIcon icon="format-image" />}
					label={__("Exit Image", "exit-image")}
					instructions={__(
						"Add an image which exits and returns with a random transition onClick",
						"exit-image"
					)}
				>
					{imageControls}
				</Placeholder>
			</div>
		</>
	);
};

export default compose(
	withSelect((select, props) => {
		const { getMedia } = select("core");
		const { imageId } = props.attributes;
		return {
			bgImage: imageId ? getMedia(imageId) : null,
		};
	})
)(ImageSelectorEdit);
